abstract class Shapes{

    abstract calculateArea(): string

}

class Circle extends Shapes{

    constructor(private radius: number){
        super()
    }

    override calculateArea(): string {
        return "Area Of Circle  = " + Math.PI * Math.pow(this.radius, 2)
    }
}

class Rectangle extends Shapes{
    constructor(private length: number, private width: number){
        super()
    }

    override calculateArea(): string {
        return "Area Of Rectangle " + this.length * this.width
    }
}



const circle = new Circle(5)
const rectangle = new Rectangle(5, 9)

console.log(circle.calculateArea())
console.log(rectangle.calculateArea())
