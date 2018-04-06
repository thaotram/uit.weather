import globalConfig from '../../../webpack.global';
import openInEditor from 'launch-editor-middleware';
import path from 'path';
import webpack from 'webpack';

const development = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './src/client/script/script.js',
    ],
    devServer: {
        hot: true,
        contentBase: './dist/client',
        before(app) {
            app.use('/__open-in-editor', openInEditor('code'));
        },
    },
};
const config = Object.assign({}, globalConfig, development);

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.resolve.modules = [
    path.resolve(__dirname, '../../../node_modules'),
    path.resolve(__dirname, '../../../src/client/script/modules'),
];

module.exports = config;
