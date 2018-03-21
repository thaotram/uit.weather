import express from 'express';
import logger from '../logger';
import openInEditor from 'launch-editor-middleware';
import webpack from 'webpack';
import webpackDev from './webpack.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackCompiler = webpack(webpackDev);

export default function(app) {
    process.env.NODE_ENV === 'development'
        ? app.use(webpackDevMiddleware(webpackCompiler, {
            stats: {
                hash: false,
                version: false,
                assets: false,
                modules: false,
                colors: true,
                // chunks: false,
                // reasons: false,
                // children: false,
                // source: false,
                // errors: false,
                // errorDetails: false,
                // warnings: false,
                // publicPath: false
            },
            logger: logger,
            before(app) {
                app.use('/__open-in-editor', openInEditor());
            },
        }))
        && app.use(webpackHotMiddleware(webpackCompiler))
        : app.use(express.static('src/client/static'));
}