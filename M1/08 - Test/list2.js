/* 2) Write a program that receives N quantity of numbers and their respective values.
Print the highest even number and the lowest odd number.

Example:
Input:
    5
    3
    4
    1
    10
    8
Output:
    Largest even number: 10
    Smallest odd number: 1
*/

const { gets, print} = require('./helper-list2');

const quantityOfNumbers = gets();
let smallestOdd = Infinity;
let largestEven = -Infinity;

for (let i = 0; i <= quantityOfNumbers; i++) {
    const number = gets();
    
    if (number < smallestOdd && number % 2 !== 0){
        smallestOdd = number;
    }

    if (number > largestEven && number % 2 === 0) {
        largestEven = number;
    }
}

print('Largest even number :' + largestEven);
print('Smallest odd number :' + smallestOdd);