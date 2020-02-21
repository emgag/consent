var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist')
    .addEntry('cmp', './src/cmp.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
;

var config = Encore.getWebpackConfig();

module.exports = config;
