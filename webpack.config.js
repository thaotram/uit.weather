var path = require('path');
var globalConfig = require('./webpack.global');
var equals = (a, b) => a.toString() == b.toString();

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

config.module
    .rules.find(rule => equals(rule.test, /\.vue$/))
    .use.push({
        loader: path.resolve('./dist/server/config/import.loader.js')
    });

module.exports = config;