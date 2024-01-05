/* 4) Create a program that fills a list with all even numbers in the range of 10 to 50. */

const even = [];

for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0){
        even.push(i);
    }
}

console.log(even);