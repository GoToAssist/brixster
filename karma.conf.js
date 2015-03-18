// Karma configuration
var webpack = require('./webpack.config');

module.exports = function(config) {
    //Set basic Brixo karma configuiration
    require('brixo-framework/config/karma.conf.js')(webpack)(config);

    config.set({
        // Here you can override any default settings from Brixo        
    });
};
