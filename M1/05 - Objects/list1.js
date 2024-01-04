/* 1) Create a class to represent cars.
Cars have a brand, a color and an average fuel consumption per kilometer driven.
Create a method that, given the number of kilometers and the price of fuel, gives us the value
spent in dollars to complete this route.
*/

class Car {
    brand;
    color;
    averageConsumptionKmPerLiter;

    constructor(brand, color, averageConsumptionKmPerLiter) {
        this.brand = brand;
        this.color = color;
        this.averageConsumptionKmPerLiter = averageConsumptionKmPerLiter;
    }

    calculateTravelExpense(distance, gasPrice) {
        const totalCost = distance * this.averageConsumptionKmPerLiter * gasPrice;
        return totalCost;
    }

    travelExpense(distance, gasPrice) {
        console.log(`The travel expense with the ${this.brand} is U$${this.calculateTravelExpense(distance, gasPrice).toFixed(2)
    }`);
    }
}

const BMW = new Car('BMW', 'White', 1/12);
BMW.travelExpense(70, 5.79);
