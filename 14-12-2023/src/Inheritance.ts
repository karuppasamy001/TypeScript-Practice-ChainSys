class WhoAmI{

    AnimalName: string;
    constructor(AnimalName: string){
        this.AnimalName = AnimalName
    }

    Dogs(): void{
        console.log(`Woof Woof! My name is ${this.AnimalName}`)
    }
  
    Cats(): void{
        console.log(`Meow Meow! My name is ${this.AnimalName}`)
    }
    
}

class Animal extends WhoAmI{
   
    constructor (animalname:string){
        super(animalname)
    }
    
}


const dog = new Animal("Tommy")

dog.Dogs()

const cat = new Animal("Tom")

cat.Cats()

