"use strict";
class Shapes {
}
class Circle extends Shapes {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return "Area Of Circle  = " + Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shapes {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return "Area Of Rectangle " + this.length * this.width;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(5, 9);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
