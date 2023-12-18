"use strict";
function FindAge(birthDate, currentDate = new Date().getFullYear()) {
    return currentDate - birthDate;
}
console.log(FindAge(2004));
