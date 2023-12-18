"use strict";
function FindPrimeNumbers(...value) {
    const output = [];
    value.forEach((num) => {
        if (isPrimeNumber(num)) {
            output.push(`${num} is a prime number`);
        }
        else {
            output.push(`${num} is not a prime number`);
        }
    });
    return output;
}
function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(FindPrimeNumbers(10, 23, 14, 13, 7, 89, 73, 71));
