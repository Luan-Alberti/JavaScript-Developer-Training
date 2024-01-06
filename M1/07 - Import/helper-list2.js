const inputs = [5, 100, 150, 90, 4, 200];
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