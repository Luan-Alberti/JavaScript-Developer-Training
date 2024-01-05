/* 5) Given a list with the averages taken by students, print all averages that are below 5.
   Example list = [2, 7, 3, 8, 10, 4] */

const list = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < list.length; i++) {
    if (list[i] < 5) {
        console.log(list[i])
    }
}