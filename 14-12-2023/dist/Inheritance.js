"use strict";
class WhoAmI {
    constructor(AnimalName) {
        this.AnimalName = AnimalName;
    }
    Dogs() {
        console.log(`Woof Woof! My name is ${this.AnimalName}`);
    }
    Cats() {
        console.log(`Meow Meow! My name is ${this.AnimalName}`);
    }
}
class Animal extends WhoAmI {
    constructor(animalname) {
        super(animalname);
    }
}
const dog = new Animal("Tommy");
dog.Dogs();
const cat = new Animal("Tom");
cat.Cats();
