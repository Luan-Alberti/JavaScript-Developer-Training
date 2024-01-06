const { gets, print } = require('./helper-functions');

const numberOfStudents = gets();
let highestValueFound = 0;

for (let i = 0; i < numberOfStudents; i++) {
    const randomlyGeneratedNumber = gets();
    if (randomlyGeneratedNumber > highestValueFound) {
        highestValueFound = randomlyGeneratedNumber;
    }
}

print(highestValueFound);
