var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist')
    .addEntry('cookiebot-bundle', './src/cookiebot-bundle.js')
    .addEntry('noop-bundle', './src/noop-bundle.js')
    .addEntry('oiljs-bundle', './src/oiljs-bundle.js')
    .copyFiles({
        from: './node_modules/@ideasio/oil.js/release/current',
        to: 'external/[name].[ext]',
        pattern: /RELEASE/
    })
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
;

var config = Encore.getWebpackConfig();

module.exports = config;
