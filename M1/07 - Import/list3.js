/*
3) Create a program that receives the quantity of numbers and their respective values.
Print all even numbers.
Example:
    Input:
        5
        1
        3
        9
        10
        12
    Output:
        Even Numbers: 10, 12
*/

const { gets, print } = require('./helper-list3');

const quantityOfNumbers = gets()

for (let i = 0; i < quantityOfNumbers; i++) {
    const number = gets();
    if (number % 2 === 0) {
        print(number)
    }
}

