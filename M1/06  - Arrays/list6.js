/* 6) Given a list with the grades taken by students, print the highest grade.
   Example grade list = [2, 7, 3, 8, 10, 4] */

const list = [2, 7, 3, 8, 10, 4];
let highest = 0

for (let i = 0; i < list.length; i++) {
    if (highest < list[i]) {
        highest = list[i]
    }
}

console.log(highest)