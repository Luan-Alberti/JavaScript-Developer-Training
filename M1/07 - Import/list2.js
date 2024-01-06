/*
2) Create a program that receives the quantity of numbers and their respective values.
Print the largest and smallest number in this set.

Example:
    Input:
        4
        100
        150
        90
        200

    Output:
        Largest number: 200
        Smallest number: 90
*/


const { gets, print } = require('./helper-list2');

const quantityOfNumbers = gets()
let smallest = Infinity;
let largest = -Infinity;

for (let i = 0; i <= quantityOfNumbers; i++) {
    const number = gets();
    
    if (number < smallest) {
        smallest = number;
    }

    if (number > largest) {
        largest = number;
    }
}

print('Largest number: ' + largest);
print('Smallest number: ' + smallest);


