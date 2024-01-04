
/* Write a program to calculate the cost of a trip.

You will have 3 variables. Being them:
 1 - Fuel price;
 2 - Average fuel consumption of the car per KM;
 3 - Distance in KM of the trip;

Print on the console the amount that will be spent to make this trip.

*/

const gasPrice = 5.79;
const kmLiter = 10;
const kmDistance = 100;

const averageGas = kmDistance / kmLiter;
const spentGas = averageGas * gasPrice;

console.log("You will spend U$" + spentGas.toFixed(2) + " dollars");