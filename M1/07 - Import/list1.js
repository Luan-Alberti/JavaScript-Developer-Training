/*
1) Program to receive a number and write its respective multiplication table.
    Example:
        Input:
            2

        Output:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/

const { gets, print } = require('./helper-list1');

const numbers = gets();

for (let i = 1; i <= 10; i++) {
    const multiple = numbers * i;
    print(numbers + 'x' + i + '=' + multiple);
}
