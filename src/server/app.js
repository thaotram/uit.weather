import express from 'express';
import SocketIO from 'socket.io';
import moment from 'moment';
import chalk from 'chalk';
import http from 'http';

import AppExpress from './express/express';
import AppSocket from './socket/socket';
import AppConfig from './config/config';

const app = express();
const port = process.env.PORT || 5;
const server = http.createServer(app);
const io = SocketIO(server);

import log from './log';

AppConfig(app, io);
AppExpress(app);
AppSocket(io);

server.listen(port);

log('┏', `App.js`, '━', chalk.magenta);
log('┃', `Environment : ${process.env.NODE_ENV}`, '', chalk.magenta);
log('┃', `Url         : http://127.0.0.1:${port}`, '', chalk.magenta);
log('┃', `Time        : ${moment().format('hh:mm:ss')}`, '', chalk.magenta);
log('┗', ``, '━', chalk.magenta);