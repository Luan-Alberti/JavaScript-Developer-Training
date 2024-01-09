/* 3) Write a program that calculates and prints the salary to be transferred to an employee.
To perform the calculation, receive the gross salary value and the additional benefits.
The transferred salary is calculated as follows:
gross salary value - tax percentage based on salary range + additional benefits
To calculate the tax percentage, the following rates apply:
    From R$ 0.00 to R$ 1100.00 = 5.00%
    From R$ 1100.01 to R$ 2500.00 = 10.00%
    Greater than 2500.00 = 15.00%

Example:
Input:
    2000
    250
Output:
    2050.00
*/

const { gets, print } = require('./helper-list3');

let grossSalaryValue = gets();
let benefits = gets()
let salaryValueAfterTax = 0;

if (grossSalaryValue <= 1100) {
    salaryValueAfterTax = grossSalaryValue * 0.95;
} else if (grossSalaryValue <= 2500) {
    salaryValueAfterTax = grossSalaryValue * 0.9;
} else {
    salaryValueAfterTax = grossSalaryValue * 0.85;
}

let salaryPlusBenefits = salaryValueAfterTax + benefits

print(salaryPlusBenefits)