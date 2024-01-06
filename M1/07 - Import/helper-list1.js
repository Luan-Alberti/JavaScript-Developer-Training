const inputs = [2];
let i = 0;

function gets() {
    const value = inputs[i];
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };