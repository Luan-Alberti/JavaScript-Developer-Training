/* Create a program that can iterate through a list of numbers and print each even number found. */

const vet = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < vet.length; i++) {
    if (vet[i] % 2 === 0) {
        console.log(vet[i] + " is an even number");
    }
}