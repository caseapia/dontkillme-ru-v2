module.exports = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dontkillme-ru-v2/' : '',
  };