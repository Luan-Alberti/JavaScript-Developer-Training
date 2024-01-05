/* Create a program that, given a number, prints its multiplication table. */

const number = 4;

for (let i = 1; i <=10; i++){
    const multiple = number * i;
    console.log(number + 'x' + i + '=' + multiple);
}