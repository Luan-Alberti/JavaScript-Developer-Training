/* 2) BMI – Body Mass Index is a World Health Organization criterion to give an indication of an adult's weight status.

BMI formula:
BMI = weight / (height * height)

Create an algorithm that, given the weight and height of an adult, shows their condition according to the table below.

BMI in adults Condition:
- Below 18.5 Underweight;
- Between 18.5 and 25 normal weight;
- Between 25 and 30 Overweight;
- Between 30 and 40 Obese;
- Above 40 Severe Obsesity;
*/

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

function BMIClassification(BMI) {
    if (BMI < 18.5) {
        return ('Your BMI is ' + BMI.toFixed(2) + ', you are underweight.');
    } else if (BMI < 25) {
        return ('Your BMI is ' + BMI.toFixed(2) + ', you have a normal weight.');
    } else if (BMI < 30) {
        return ('Your BMI is ' + BMI.toFixed(2) + ', you are Overweight.');
    } else if (BMI < 40) {
        return ('Your BMI is ' + BMI.toFixed(2) + ', you are Obese.');
    } else {
        return ('Your BMI is ' + BMI.toFixed(2) + ', you are Severe Obese');
    }

}

// Main
(function () {
    const weight = 125;
    const height = 1.78;

    const BMI = calculateBMI(weight, height);
    console.log(BMIClassification(BMI));
})();
