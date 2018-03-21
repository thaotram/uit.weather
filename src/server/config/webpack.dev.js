import HtmlWebpackPlugin from 'html-webpack-plugin';
import openInEditor from 'launch-editor-middleware';
import path from 'path';
import webpack from 'webpack';

export default {
    mode: 'development',
    cache: true,
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './src/client/script/script.js'
    ],
    target: 'web',
    devtool: '#source-map',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, './dist/client')
    },
    devServer: {
        hot: true,
        contentBase: './dist/client',
        before(app) {
            app.use('/__open-in-editor', openInEditor('code'));
        },
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            query: {
                presets: ['es2015', 'stage-2']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-2']
            }
        }, {
            test: /\.(png|jpg|gif|svg|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.json$/,
            use: 'json-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, '../../../node_modules'),
            path.resolve(__dirname, '../../../src/client/script/modules')
        ]
    }
};