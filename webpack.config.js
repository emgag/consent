var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist')
    .addPlugin(new webpack.DefinePlugin({
        VERSION: JSON.stringify('2.1.0'),
    }))
    .addEntry('noop-bundle', './src/noop-bundle.js')
    .addEntry('quantcast-bundle', './src/quantcast-bundle.js')
    .addEntry('civic-bundle', './src/civic-bundle.js')
    .addEntry('stub', './src/stub.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
;

var config = Encore.getWebpackConfig();

module.exports = config;
