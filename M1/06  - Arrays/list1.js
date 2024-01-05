/* Create a program that, given a number, prints its multiplication table. */

const numbers = 4;

for (let i = 1; i <= numbers.length; i++) {
    const multiple = numbers * i;
    console.log(numbers + 'x' + i + '=' + multiple);
}