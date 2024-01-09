
const input = [3, 7, 8, 9];
let i = 0;

function gets() {
    const value = input[i];
    i++;
    return value;
}

function print (text) { 
    console.log(text);
}

module.exports = { gets, print };