import chalk from 'chalk';

export default function(
    before = '',
    text,
    after = '',
    color = chalk.white,
    length = 48) {

    text = text.length ? ` ${text} ` : '';
    const count = length - (before.length + text.length);
    const repeat = count < 0 ? 0 : count;
    console.log(color(
        before
        + text
        + (after != '' ? after.repeat(repeat) : '')
    ));
}