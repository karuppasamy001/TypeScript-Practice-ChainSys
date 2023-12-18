"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Template_1 = require("./Template");
if (Template_1.symbol == '+') {
    console.log(`The result of ${Template_1.a} + ${Template_1.b} is ${(0, Template_1.Addition)(Template_1.a, Template_1.b)}`);
}
else if (Template_1.symbol == '-') {
    console.log(`The result of ${Template_1.a} - ${Template_1.b} is ${(0, Template_1.Subtraction)(Template_1.a, Template_1.b)}`);
}
else if (Template_1.symbol == '*') {
    console.log(`The result of ${Template_1.a} * ${Template_1.b} is ${(0, Template_1.Multiplication)(Template_1.a, Template_1.b)}`);
}
else if (Template_1.symbol == '/') {
    console.log(`The result of ${Template_1.a} * ${Template_1.b} is ${(0, Template_1.Division)(Template_1.a, Template_1.b)}`);
}
else {
    console.log('Invalid Symbol!');
}
