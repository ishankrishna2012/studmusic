# Harmony Music - Music Fetching & Streaming Architecture

## Overview
Harmony Music is a cross-platform Flutter app that streams music from YouTube Music. Here's how it fetches and delivers music to users—this architecture can be adapted for StudMusic.

---

## 1. API Integration Architecture

### Base Setup
```dart
// From: lib/services/constant.dart
const domain = "https://music.youtube.com/";
const String baseUrl = '${domain}youtubei/v1/';
const fixedParms = '?prettyPrint=false&alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
```

**Key Points:**
- Uses official YouTube Music API (unexposed but reverse-engineered)
- Base URL: `https://music.youtube.com/youtubei/v1/`
- API Key is embedded (AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30)
- POST requests with JSON bodies containing context & parameters
- Headers include User-Agent, Content-Type, and CONSENT cookie

---

## 2. Music Service Flow

### Request Context Setup
```dart
// From: lib/services/music_service.dart
class MusicServices extends GetxService {
  final Map<String, dynamic> _context = {
    'context': {
      'client': {
        "clientName": "WEB_REMIX",
        "clientVersion": "1.20230213.01.00",
      },
      'user': {}
    }
  };

  Future<Response> _sendRequest(String action, Map<String, dynamic> data,
      {String additionalParams = ""}) async {
    try {
      final response = await dio.post(
        "$baseUrl$action$fixedParms$additionalParams",
        options: Options(headers: _headers),
        data: data
      );
      if (response.statusCode == 200) return response;
      else return _sendRequest(action, data, additionalParams: additionalParams);
    } on DioException catch (e) {
      throw NetworkError();
    }
  }
}
```

**Key Points:**
- All requests use POST to `${baseUrl}{action}${fixedParams}${additionalParams}`
- Context object contains client name, version, user info
- Automatic retry on failure
- Uses Dio for HTTP client

---

## 3. Content Fetching Endpoints

### Home Screen (Recommended Content)
```dart
Future<dynamic> getHome({int limit = 4}) async {
  final data = Map.from(_context);
  data["browseId"] = "FEmusic_home";
  final response = await _sendRequest("browse", data);
  final results = nav(response.data, single_column_tab + section_list);
  final home = [...parseMixedContent(results)];
  // Returns list of content sections with title & contents
}
```

**Endpoints:**
- `browse` action with browseId `"FEmusic_home"` = Home feed
- Returns sections: Recommended, New Releases, Trending, Charts, etc.

### Search Functionality
```dart
Future<Map<String, dynamic>> search(String query,
    {String? filter, String? scope, int limit = 30}) async {
  final data = Map.from(_context);
  data['context']['client']["hl"] = 'en';
  data['query'] = query;

  // Available filters: 'albums', 'artists', 'playlists', 'songs', 'videos'
  // Returns: {'Songs': [...], 'Albums': [...], 'Artists': [...], ...}
}
```

### Playlists & Albums
```dart
Future<Map<String, dynamic>> getPlaylistOrAlbumSongs(
    {String? playlistId, String? albumId, int limit = 3000}) async {
  String browseId = playlistId != null
    ? (playlistId.startsWith("VL") ? playlistId : "VL$playlistId")
    : albumId!;
  final data = Map.from(_context);
  data['browseId'] = browseId;
  final response = await _sendRequest('browse', data);
  // Parses header (title, thumbnail, description)
  // Parses playlist items with continuation support
}
```

### Watch Playlist (Queue/Related)
```dart
Future<Map<String, dynamic>> getWatchPlaylist(
    {String videoId = "", String? playlistId, int limit = 25,
     bool radio = false, bool shuffle = false}) async {
  final data = Map.from(_context);
  data['enablePersistentPlaylistPanel'] = true;
  data['isAudioOnly'] = true;
  data['tunerSettingValue'] = 'AUTOMIX_SETTING_NORMAL';
  
  if (videoId.isNotEmpty) data['videoId'] = videoId;
  if (playlistId != null) data['playlistId'] = playlistId;
  
  // Radio mode: recommends related songs
  // Shuffle mode: randomized playback
  // Returns: {tracks: [...], additionalParamsForNext: "..."}
}
```

---

## 4. Audio Stream Fetching

### Stream URL Resolution (Critical!)
```dart
// From: lib/services/stream_service.dart
class StreamProvider {
  static Future<StreamProvider> fetch(String videoId) async {
    final yt = YoutubeExplode();  // youtube_explode_dart package
    
    try {
      final res = await yt.videos.streamsClient.getManifest(videoId);
      final audio = res.audioOnly;  // Gets audio-only streams
      
      return StreamProvider(
        playable: true,
        statusMSG: "OK",
        audioFormats: audio.map((e) => Audio(
          itag: e.tag,  // 140=128kbps mp4a, 251=128kbps opus, etc.
          audioCodec: e.audioCodec.contains('mp') ? Codec.mp4a : Codec.opus,
          bitrate: e.bitrate.bitsPerSecond,
          loudnessDb: e.loudnessDb,
          url: e.url.toString(),
          size: e.size.totalBytes
        )).toList()
      );
    } catch (e) {
      // Handle VideoUnplayableException, VideoUnavailableException, etc.
      return StreamProvider(playable: false, statusMSG: e.message);
    }
  }
}
```

**Key Points:**
- Uses `youtube_explode_dart` package to get direct audio URLs
- Supports multiple quality levels (bitrates)
- Audio formats: mp4a (AAC), opus (Vorbis)
- Returns playable URL with stream metadata

### URL Caching Strategy
```dart
// From: lib/services/audio_handler.dart
Future<HMStreamingData> checkNGetUrl(String songId,
    {bool generateNewUrl = false}) async {
  final songsUrlCacheBox = Hive.box("SongsUrlCache");
  final qualityIndex = Hive.box('AppPrefs').get('streamingQuality') ?? 1;
  
  HMStreamingData? streamInfo;
  if (songsUrlCacheBox.containsKey(songId) && !generateNewUrl) {
    final streamInfoJson = songsUrlCacheBox.get(songId);
    if (!isExpired(url: streamInfoJson['lowQualityAudio']['url'])) {
      streamInfo = HMStreamingData.fromJson(streamInfoJson);
    }
  }
  
  if (streamInfo == null) {
    // Fetch in background isolate to avoid UI blocking
    final token = RootIsolateToken.instance;
    final streamInfoJson = await Isolate.run(() => getStreamInfo(songId, token));
    streamInfo = HMStreamingData.fromJson(streamInfoJson);
    if (streamInfo.playable) songsUrlCacheBox.put(songId, streamInfoJson);
  }
  
  streamInfo.setQualityIndex(qualityIndex as int);
  return streamInfo;
}
```

**Storage:**
- Uses Hive (local NoSQL database) for caching
- Keys: Song IDs
- Values: Stream URLs with metadata (bitrate, codec, loudnessDb)
- Checks URL expiration (streams expire after ~6 hours)

---

## 5. Audio Playback Architecture

### Audio Handler (Managed by audio_service)
```dart
// From: lib/services/audio_handler.dart
class MyAudioHandler extends BaseAudioHandler {
  late AudioPlayer _player;  // just_audio package
  
  Future<void> customAction(String name, [Map<String, dynamic>? extras]) async {
    switch (name) {
      case 'playByIndex':
        final songIndex = extras!['index'];
        currentIndex = songIndex;
        final currentSong = queue.value[currentIndex];
        
        // Get stream URL
        final streamInfo = await checkNGetUrl(currentSong.id);
        
        // Create audio source
        await _playList.add(_createAudioSource(currentSong));
        await _player.play();
        break;
    }
  }
  
  AudioSource _createAudioSource(MediaItem song) {
    return AudioSource.uri(Uri.parse(song.extras!['url']));
  }
}
```

### Audio Quality Options
```dart
// High quality (bitrate 128-256 kbps)
final highestQualityAudio = audioFormats.firstWhere(
  (item) => item.itag == 251 || item.itag == 140  // opus or mp4a
);

// Low quality (bitrate 64-128 kbps)
final lowQualityAudio = audioFormats.firstWhere(
  (item) => item.itag == 249 || item.itag == 139  // opus or mp4a
);
```

---

## 6. Data Models

### Song/Track Model
```dart
class MediaItem {
  final String id;          // YouTube video ID
  final String title;
  final String? artist;
  final String? album;
  final Duration? duration;
  final Uri? artUri;        // Thumbnail URL
  final Map<String, dynamic>? extras;  // Contains 'url', 'date', etc.
}

factory MediaItem.fromJson(Map<String, dynamic> json) {
  return MediaItem(
    id: json["videoId"],
    title: json["title"],
    duration: json['duration'] != null
      ? Duration(seconds: json['duration'])
      : toDuration(json['length']),
    album: json['album']?['name'],
    artist: json['artists']?.map((e) => e['name']).join(', '),
    artUri: Uri.parse(Thumbnail(json["thumbnails"][0]['url']).high),
    extras: {'url': json['url'] ?? url}
  );
}
```

### Playlist Model
```dart
class Playlist {
  final String playlistId;
  String title;
  String? description;
  String thumbnailUrl;
  String? songCount;
  bool isPipedPlaylist;
  bool isCloudPlaylist;
}
```

---

## 7. Alternative: Piped Integration

For privacy-focused approach, Harmony Music also supports Piped (self-hosted YT proxy):

```dart
// From: lib/services/piped_service.dart
class PipedServices {
  Future<Res> getPlaylistSongs(String playlistId) async {
    final url = "$_insApiUrl/playlists/$playlistId";
    final response = await _dio.get(url);
    // Returns: {streams: [{id, title, uploader, duration, thumbnail}]}
  }
}
```

**Advantages:**
- No tracking
- Self-hosted option available
- Similar API to YouTube Music

---

## 8. Caching & Storage Strategy

### Hive Boxes (Local NoSQL)
```dart
// In main.dart
await Hive.openBox("SongsCache");        // Currently playing cache
await Hive.openBox("SongDownloads");     // Downloaded songs
await Hive.openBox("SongsUrlCache");     // Streaming URLs
await Hive.openBox("LibraryPlaylists");  // User playlists
await Hive.openBox("lyrics");            // Synced lyrics
await Hive.openBox("AppPrefs");          // Settings
```

### Download Support
```dart
// From: lib/services/downloader.dart
class Downloader {
  Future<void> downloadSong(MediaItem song, String downloadPath) async {
    final streamInfo = await Get.find<MusicServices>().checkNGetUrl(song.id);
    final requiredAudioStream = streamInfo.audio;
    
    // Download file
    await _dio.download(
      requiredAudioStream.url,
      filePath,
      onReceiveProgress: (count, total) {
        songDownloadingProgress.value = ((count / total) * 100).toInt();
      }
    );
    
    // Save metadata with audio_tags package
    await AudioTags.write(filePath,
      tag: Tag(
        title: song.title,
        artist: song.artist,
        album: song.album
      )
    );
  }
}
```

---

## 9. Network Error Handling

```dart
// Automatic retry on network failure
Future<Response> _sendRequest(String action, Map data) async {
  try {
    final response = await dio.post("$baseUrl$action$fixedParms",
      options: Options(headers: _headers),
      data: data
    );
    if (response.statusCode == 200) return response;
    else return _sendRequest(action, data);  // Retry
  } on DioException catch (e) {
    throw NetworkError();  // Show user-friendly message
  }
}

// Handle 403 Forbidden (IP blocking)
// Solution: Fetch new stream URL when playback fails
customAction("playByIndex", {'index': currentIndex, 'newUrl': true});

// Handle connection timeout
// Uses Isolate to fetch stream info in background without freezing UI
final streamInfoJson = await Isolate.run(() => getStreamInfo(songId, token));
```

---

## 10. Deep Linking & Sharing

```dart
// From: lib/utils/app_link_controller.dart
// Supports YouTube Music links:
// - https://music.youtube.com/watch?v={songId}
// - https://music.youtube.com/playlist?list={playlistId}
// - https://youtu.be/{songId}

Future<void> playSong(String songId) async {
  final result = await Get.find<MusicServices>().getSongWithId(songId);
  Get.find<PlayerController>().playPlayListSong(List.from(result[1]), 0);
}
```

---

## Implementation Summary for StudMusic

### Minimum Requirements:
1. **HTTP Client**: Dio for API requests
2. **Audio Playback**: just_audio + audio_service
3. **Stream Fetching**: youtube_explode_dart OR custom YouTube API integration
4. **Local Storage**: Hive for caching
5. **State Management**: GetX (controllers, observables)

### API Endpoints Needed:
- `browse` → Home, Playlists, Albums
- `search` → Search songs, artists, playlists
- `next` → Watch playlist (queue/related)
- `player` → Get individual song with stream info

### Architecture Pattern:
1. **MusicServices** → API calls + data parsing
2. **StreamProvider** → URL fetching from video IDs
3. **AudioHandler** → Playback management
4. **Controllers** → UI state management
5. **Local Caching** → Hive for offline support

### Advantages of This Approach:
✅ No authentication required
✅ Access to millions of songs via YouTube Music
✅ Automatic quality selection
✅ Download support
✅ Playlist & library features
✅ Cross-platform (Flutter)
✅ Minimal bandwidth with caching

---

## References
- **Repository**: [anandnet/Harmony-Music](https://github.com/anandnet/Harmony-Music)
- **Key Dependencies**: 
  - `youtube_explode_dart` - Stream fetching
  - `just_audio` - Audio playback
  - `audio_service` - Background playback
  - `dio` - HTTP client
  - `hive` - Local database
  - `get` - State management

