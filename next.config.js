const withVideos = require('next-videos');

const nextConfig = {
  webpack: (config) => {
    // Agregar alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': './src/components',
      '@styles': './src/styles'
    };

    // Personalizar límite de tamaño de archivos
    config.performance = {
      ...config.performance,
      maxAssetSize: 1000000, // 1 MB
      maxEntrypointSize: 1000000 // 1 MB
    };

    return config;
  }
};

module.exports = withVideos(nextConfig);
