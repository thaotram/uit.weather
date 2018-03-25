import HtmlWebpackPlugin from 'html-webpack-plugin';
import globalConfig from '../../../webpack.global';
import openInEditor from 'launch-editor-middleware';
import path from 'path';
import webpack from 'webpack';
var equals = (a, b) => a.toString() == b.toString();

const development = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './src/client/script/script.js'
    ],
    devServer: {
        hot: true,
        contentBase: './dist/client',
        before(app) {
            app.use('/__open-in-editor', openInEditor('code'));
        },
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, '../../../node_modules'),
            path.resolve(__dirname, '../../../src/client/script/modules')
        ]
    }
};
const config = Object.assign({}, globalConfig, development);

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
);
config.module
    .rules.find(rule => equals(rule.test, /\.vue$/))
    .use.push({
        loader: path.resolve('./src/server/config/import.loader.js')
    });

module.exports = config;