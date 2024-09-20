module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/.' : '/.',
    basePath: process.env.NODE_ENV === 'production' ? '/.' : '/.',
    trailingSlash: true,
    output: 'export',
};