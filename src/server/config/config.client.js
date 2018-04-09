import express from 'express';
import path from 'path';
// import logger from '../logger';
// import { webpack as webpackLog } from 'log';
import webpack from 'webpack';
import openInEditor from 'launch-editor-middleware';
import webpackDev from './webpack.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackCompiler = webpack(webpackDev);

export default function(app) {
    if (process.env.NODE_ENV === 'development') {
        const config = {
            stats: {
                hash: false,
                version: false,
                assets: false,
                modules: false,
                colors: true,
            },
            before(app) {
                app.use('/__open-in-editor', openInEditor());
            },
        };
        app.use(webpackDevMiddleware(webpackCompiler, config));
        app.use(webpackHotMiddleware(webpackCompiler));
        app.use(express.static(path.resolve(__dirname, '../../client/static')));
    }
    else {
        app.use(express.static(path.resolve(__dirname, '../../client/static')));
        app.use(express.static(path.resolve(__dirname, '../../../dist/client')));
    }
}
