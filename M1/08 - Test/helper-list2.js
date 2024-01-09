const input = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets (){
    const value = input[i]
    i++;
    return value;
}

function print (text){
    console.log(text);
}

module.exports = { gets, print};