import { Operations, Operators } from "./interface"

class Calculator implements Operations {
    

    get calculate(): Operators{
        return {
            plus: (a, b) => this.operations(a, b, '+'),
            minus: (a, b) => this.operations(a, b, '-'),
            mul: (a, b) => this.operations(a, b, '*'),
            div: (a, b) => this.operations(a, b, '/'),
            AC: (a, b) => this.operations(a, b, 'c')
        }
    }
        
    operations(a: number, b: number, typeOfOperation: string): number {
        let result: number = 0;

        switch (typeOfOperation) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b
                break;
            case 'c':
                return result
        
            default:
                throw new Error('Invalid operation type');
        }

        return result;
    }
}


const button = document.getElementsByTagName('button') 
const h1 = document.getElementById('output') as HTMLHeadElement

const calculator = new Calculator()

let defaultValues: number = 0

for(let i of button){
    i.addEventListener("click", ()=>{
        const input = document.getElementById("value") as HTMLInputElement
        const newValue: number = parseFloat(input.value)

        defaultValues = calculator.calculate[i.id](defaultValues, newValue)
        input.value = ""
        h1.innerHTML = `Result : ${defaultValues}`
    })
}
