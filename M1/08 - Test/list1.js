/* 1) Write a program that receives the number of grades and the student's grades, calculates the average, and returns:
If the average is < 5, print "Failed."
If the average is >= 5 and < 7, print "Recovery."
If the average is >= 7, print "Approved."

Example:
Input:
    3, 7, 8, 9
Output:
    Approved
*/


const { gets, print} = require('./helper-list1');

const quantityOfGrades = gets()
let sumOfGrades = 0;

for (let i = 0; i < quantityOfGrades; i++){
    const grade = gets();
    sumOfGrades = sumOfGrades + grade;
}

let gradeAverage = sumOfGrades / quantityOfGrades;

if (gradeAverage < 5) {
    print('Failed')
} else if (gradeAverage < 7){
    print('Recovery')
} else {
    print('Approved')
}


