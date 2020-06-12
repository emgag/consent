var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist')
    .addEntry('noop-bundle', './src/noop-bundle.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
;

var config = Encore.getWebpackConfig();

module.exports = config;
