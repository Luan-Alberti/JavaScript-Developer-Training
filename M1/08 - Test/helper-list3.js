const input = [1400, 250];
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