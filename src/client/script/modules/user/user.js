import users from './user.data';
const randomArray = (input, output_length = this.random(1, input.length / 3)) => {
    const output = new Array(output_length);
    if (output_length > input.length) return input;
    const taken = new Array(input.length);
    while (output_length--) {
        var x = Math.floor(Math.random() * input.length);
        output[output_length] = input[x in taken ? taken[x] : x];
        taken[x] = --input.length;
    }
    return output;
};
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    one: name => users.find(user => `${user.name.first} ${user.name.last}` == name) || users[random(0, users.length)],
    more: number => randomArray(users, number)
};