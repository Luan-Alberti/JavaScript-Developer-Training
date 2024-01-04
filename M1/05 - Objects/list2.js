/* 2) Create a class to represent people.
For each person we will have the attributes name, weight and height.
People must be able to tell the value of their BMI (BMI = weight / (height * height));
Instantiate a person called José who weighs 70kg and is 1.75 tall and ask José to say the value
your BMI;
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI() {
        const BMI = this.weight / Math.pow(this.height, 2);     
        return parseFloat(BMI.toFixed(2));
    }

    classifyBMI(){
        const BMI = this.calculateBMI()
        if (BMI < 18.5) {
            return('Your BMI is ' + BMI.toFixed(2) + ', you are underweight.');
        } else if (BMI < 25) {
            return('Your BMI is ' + BMI.toFixed(2) + ', you have a normal weight.');
        } else if (BMI < 30) {
            return('Your BMI is ' + BMI.toFixed(2) + ', you are Overweight.');
        } else if (BMI < 40) {
            return('Your BMI is ' + BMI.toFixed(2) + ', you are Obese.');
        } else {
            return('Your BMI is ' + BMI.toFixed(2) + ', you are Severe Obese');
        }
    }
    
}

const jose = new Person('jose', 70, 1.75);
console.log(jose.calculateBMI());
const luan = new Person('luan', 125, 1.79);
console.log(luan.calculateBMI());

console.log(luan.classifyBMI());