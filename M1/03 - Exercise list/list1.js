/* 1) Create an algorithm that, given the 3 grades obtained by a student in a college semester,
calculate and print your average and your classification according to the table below.

Average = (grade 1 + grade 2 + grade 3) / 3;

Classification:
- Average less than 5, failure;
- Average between 5 and 7, recovery;
- Average above 7, passed the semester;
*/

const grade1 = 5;
const grade2 = 10;
const grade3 = 10;

const average = (grade1 + grade2 + grade3) / 3;

if (average < 5) {
    console.log('Your grade was ' + average.toFixed(2) + ', you failed.')
} else if (average < 7) {
    console.log('Your grade was ' + average.toFixed(2) + ', you are in recovery.')
} else {
    console.log('Your grade was ' + average.toFixed(2) + ', you passed the semester.')
}
