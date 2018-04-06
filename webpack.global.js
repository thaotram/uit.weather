var HtmlWebpackPlugin = require('html-webpack-plugin');
// var openInEditor = require('launch-editor-middleware');
var path = require('path');
// var webpack = require('webpack');

module.exports = {
    cache: true,
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/client'),
    },
    target: 'web',
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        query: {
                            presets: ['es2015', 'stage-2'],
                        },
                    },
                    {
                        loader: 'vue-import-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'stage-2'],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/client/script/vue'),
        },
        extensions: ['.js', '.vue', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
        }),
    ],
};