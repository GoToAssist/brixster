// Karma configuration
var webpack = require('./webpack.config');

module.exports = function(config) {
    //Set basic Brixo karma configuiration
    require('brixo-framework/config/karma.conf.js')(webpack)(config);

    //Here you can override any default settings from Brixo
    config.set({
        
    });
};
