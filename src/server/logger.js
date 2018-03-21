'use strict';

const chalk = require('chalk');
import log from './log';

module.exports = function() {
    const o = {};
    const each = (color) => (...text) =>
        log('┃', text.join(''), '', color);

    o.info = each(chalk.cyan);
    o.trace = each(chalk.blue);
    o.error = each(chalk.red);
    o.warn = each(chalk.yellow);
    o.debug = each(chalk.gray);

    return o;
}();