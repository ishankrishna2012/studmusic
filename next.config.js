/* Production-optimized Next.js configuration for Netlify */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  
  /* Disable static optimization features not compatible with static export */
  images: {
    unoptimized: true,
  },

  /* Build Optimization */
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  /* Netlify Deployment Optimization */
  poweredByHeader: false,

  /* Webpack optimization */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single'
      };
    }
    return config;
  }
}
