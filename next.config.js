module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dontkillme-ru-v2/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/dontkillme-ru-v2' : '',
    trailingSlash: true,
    output: 'export',
  };