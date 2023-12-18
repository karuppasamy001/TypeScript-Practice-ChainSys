"use strict";
// basic types
const userName = 'Karuppasamy';
const num = 8870047551;
const available = true;
let obj;
obj = {
    username: userName,
    phone: num,
    available: available
};
console.log(userName);
console.log(num);
console.log(available);
console.log(obj);
// basic types II
// array
let person = [];
person.push('jhon', 'rick');
for (let i = 0; i < person.length; i++) {
    console.log(`${i + 1}. ${person[i]}`);
}
// tuple
let person2 = ['John', 36];
console.log(person2);
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
const size = Size.Large;
console.log(size);
// any
let array = ['name', 2, true];
console.log(array);
// void
function helloWorld(a) {
    console.log(a);
}
helloWorld("Hello World !");
