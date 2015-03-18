
var _ = require('lodash');

// Brixo Framework Webpack Config
// (by default builds 'main.js' and exports 'brixo' namespace into 'bundles/')
var webpackConfig = require('brixo-framework/config/webpack.config.js');
module.exports = _.merge(webpackConfig,{
    // override webpack settings here,
});