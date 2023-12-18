class Sample{
    public name: string
    readonly id: number

    constructor(name:string){
        this.name = name;
        this.id= Math.floor(Math.random() * 100);
    }

    viewProfile(){
        console.log(`Name : ${this.name}, ID : ${this.id}`);
    }

}


let name_1 = new Sample("Karuppasamy")
let name_2 = new Sample("Rajkumar")
// name_1.id = 12345 // Cannot assign to 'id' because it is a read-only property.

name_1.viewProfile()
name_2.viewProfile()

