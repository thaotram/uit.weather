var path = require('path');
var globalConfig = require('./webpack.global');

var production = {
    mode: 'production',
    entry: {
        index: './src/client/script/script.js',
    },
};
var config = Object.assign({}, globalConfig, production);

config.resolve.modules = [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, './src/client/script/modules'),
];

module.exports = config;
