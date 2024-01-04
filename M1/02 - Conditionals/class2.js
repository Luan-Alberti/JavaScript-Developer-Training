/* Write a program to calculate the cost of a trip.

You will have 5 variables. Being them:
 1 - Price of ethanol;
 2 - Gasoline price;
 3 - The type of fuel in your car;
 4 - Average fuel consumption of the car per KM;
 5 - Distance in KM of the trip;

Print on the console the amount that will be spent to make this trip.

*/

const ethanolPrice = 4;
const gasPrice = 6;
const fuelType = 'Gasoline';
const kmLiter = 10;
const kmDistance = 100;

const averageGas = kmDistance / kmLiter;

if (fuelType === 'Ethanol') {
    const spentGas = averageGas * ethanolPrice;
    console.log("You will spend U$" + spentGas.toFixed(2) + " dollars");
}
else if (fuelType === 'Gasoline') {
    const spentGas = averageGas * gasPrice;
    console.log("You will spend U$" + spentGas.toFixed(2) + " dollars");
}
else {
    console.log("Enter a valid fuel type");
}

