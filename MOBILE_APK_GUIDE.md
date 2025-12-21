# 📱 Build Mobile APK for Android

This guide explains how to convert StudMusic into an Android APK that you can install on your phone.

## Option 1: Using Capacitor (Recommended) ⭐

Capacitor wraps your web app as a native Android app.

### Step 1: Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

When prompted:
- **App name**: StudMusic
- **App ID**: com.studmusic.app
- **Directory**: (press Enter for default)

### Step 2: Add Android Platform
```bash
npm install @capacitor/android
npx cap add android
```

### Step 3: Build Web App
```bash
npm run build
```

### Step 4: Copy Assets to Android
```bash
npx cap copy android
```

### Step 5: Build APK

**Option A: Using Android Studio (Easiest)**
1. Install [Android Studio](https://developer.android.com/studio)
2. Run: `npx cap open android`
3. Android Studio opens - click **Build** → **Build Bundle(s) / APK(s)** → **Build APK**
4. Find APK in: `android/app/build/outputs/apk/release/`

**Option B: Using Command Line**
```bash
cd android
./gradlew assembleRelease
```
APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

### Step 6: Install on Phone
- Connect Android phone via USB
- Enable Developer Mode (tap Build Number 7 times in Settings → About)
- Allow USB Debugging
- Run: `adb install android/app/build/outputs/apk/release/app-release.apk`

Or manually:
1. Transfer APK to phone
2. Open file manager
3. Tap APK to install

## Option 2: Using Expo (Easiest for Beginners) ⭐⭐⭐

Expo is simpler if you have the Expo CLI installed.

### Step 1: Install Expo
```bash
npm install -g expo-cli
```

### Step 2: Create Expo Project
```bash
expo init studmusic-mobile
cd studmusic-mobile
```

### Step 3: Copy Project Files
Copy your `src` files into the Expo project structure

### Step 4: Build APK
```bash
eas build --platform android
```

Follow the prompts - Expo handles everything!

## Option 3: Using Progressive Web App (PWA) 🌐

Simplest option - just add to home screen:

### On Your Phone (Android):
1. Open phone browser
2. Visit your Netlify URL
3. Click 3 dots → **"Install app"** or **"Add to Home Screen"**
4. App appears as icon on home screen
5. Works offline!

**Pros:**
- ✅ No APK needed
- ✅ Auto-updates from web
- ✅ Works offline (with service worker)

**Cons:**
- ❌ Less like native app
- ❌ Takes up URL bar space

## Full Setup (From Scratch)

```bash
# Clone repo
git clone https://github.com/ishankrishna2012/studmusic.git
cd studmusic

# Install dependencies
npm install

# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add Android platform
npm install @capacitor/android
npx cap add android

# Build web assets
npm run build

# Copy to Android
npx cap copy android

# Open Android Studio
npx cap open android

# In Android Studio:
# - Build → Build Bundle(s) / APK(s) → Build APK
# - Find APK in android/app/build/outputs/apk/release/
```

## Troubleshooting

**Q: "Android SDK not found"**
- Install Android Studio from https://developer.android.com/studio
- Install SDK through SDK Manager in Android Studio

**Q: "gradle error"**
- Make sure Java 11+ is installed
- Try: `./gradlew clean`

**Q: "Build fails on Capacitor"**
- Update Node.js to version 16+
- Clear npm cache: `npm cache clean --force`
- Reinstall: `npm install`

**Q: "APK install fails"**
- Enable "Unknown Sources" in phone settings
- Check if version is compatible
- Try different USB cable

## Mobile Testing Tips

### While Developing:
```bash
npm run dev
# Open http://localhost:3000 on phone (same Wi-Fi)
```

### Before Building APK:
- Test on phone browser
- Check layout on mobile (DevTools → Responsive)
- Test touch interactions
- Test offline functionality

### After Building APK:
- Test all features on real device
- Check scrolling performance
- Test player controls
- Check battery usage

## Comparing Options

| Option | Ease | Native Feel | Offline | Update |
|--------|------|-----------|---------|--------|
| **Capacitor** | Medium | High | Yes | Manual |
| **Expo** | Easy | High | Yes | Easy |
| **PWA** | Very Easy | Low | Yes | Auto |

## Next Steps

1. **Choose an option** above
2. **Follow the steps** for your choice
3. **Test on your phone**
4. **Share with friends!** 🎵

---

**Need help?**
- [Capacitor Docs](https://capacitorjs.com/docs/android)
- [Expo Docs](https://docs.expo.dev/)
- [Android Studio Docs](https://developer.android.com/studio/intro)

**Enjoy StudMusic on your phone!** 🎶📱
