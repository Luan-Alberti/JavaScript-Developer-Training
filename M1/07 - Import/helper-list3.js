const inputs = [6, 5, 1, 3, 9, 10, 12];
let i = 0;

function gets() {
    const value = inputs[i];
    i++;
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };
