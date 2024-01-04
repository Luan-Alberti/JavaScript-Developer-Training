class Person {
    name;
    age;
    birthYear;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birthYear = 2022 - age;
    }

    describe() {
        console.log(`My name is ${this.name}, and my age is ${this.age}`);
    }
}

function comparePeople(person1, person2) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} is older than ${person2.name}`);
    } else if (person2.age > person1.age) {
        console.log(`${person2.name} is older than ${person1.name}`);
    } else {
        console.log(`${person1.name} and ${person2.name} are the same age`);
    }
}

const vitor = new Person('Vitor', 25);
const renan = new Person('Renan', 30);

comparePeople(vitor, renan);
