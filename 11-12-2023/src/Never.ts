type Fruit = 'Apple' | 'Banana' | 'Orange';

function typeOfFruit(fruit: Fruit): string {
    switch (fruit) {
        case 'Apple':
            return 'I like Apple';
        case 'Banana':
            return 'I like Banana';
        case 'Orange':
            return 'I like Orange';
        default:
            let exhaustive: never = fruit;
            return exhaustive;
    }
}


let fruit_0:Fruit = 'Apple'
let fruit_1:Fruit = 'Banana'

console.log(typeOfFruit(fruit_0)) // I like Apple
console.log(typeOfFruit(fruit_1)) // I like Banana
