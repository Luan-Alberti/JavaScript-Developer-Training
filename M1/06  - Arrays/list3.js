/* 3) Create a program that, given a list of names, prints the names that start with the letter "V". */

const names = ["John", "Emily", "Michael", "Victoria", "Peter"];

for (let i = 0; i < names.length; i++) {
    if (names[i][0].toUpperCase() === 'V') {
        console.log(names[i]);
    }
}
