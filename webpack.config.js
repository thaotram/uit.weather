var path = require('path');
var globalConfig = require('./webpack.global');

var production = {
    mode: 'production',
    entry: {
        index: './src/client/script/script.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src/client/script/modules')
        ]
    }
};
var config = Object.assign({}, globalConfig, production);

module.exports = config;