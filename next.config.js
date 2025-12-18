/* Production-optimized Next.js configuration */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.jiosaavn.com',
      },
      {
        protocol: 'https',
        hostname: '*.ytimg.com',
      },
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
}
