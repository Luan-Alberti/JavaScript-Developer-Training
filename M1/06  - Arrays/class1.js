const grades = [];

grades.push(10);
grades.push(10);
grades.push(10);

let sum = 0;

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    sum = sum + grade;
}

const average = sum / grades.length;
console.log(average);