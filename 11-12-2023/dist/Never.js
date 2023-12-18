"use strict";
function typeOfFruit(fruit) {
    switch (fruit) {
        case 'Apple':
            return 'I like Apple';
        case 'Banana':
            return 'I like Banana';
        case 'Orange':
            return 'I like Orange';
        default:
            let exhaustive = fruit;
            return exhaustive;
    }
}
let fruit0 = 'Apple';
let fruit1 = 'Banana';
console.log(typeOfFruit(fruit0)); // I like Apple
console.log(typeOfFruit(fruit1)); // I like Banana
