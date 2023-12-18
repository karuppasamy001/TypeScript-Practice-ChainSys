import {Addition, Multiplication, Subtraction, Division, a, b} from './Template'


const symbols: string[] = ['+', '-', '*', '/', '[']

let i: number = 0

while(i < symbols.length){
    if(symbols[i] == '+')   console.log(`The result of ${a} + ${b} is ${Addition(a, b)}`)
    else if(symbols[i] == '-')    console.log(`The result of ${a} - ${b} is ${Subtraction(a, b)}`)
    else if(symbols[i] == '*')    console.log(`The result of ${a} * ${b} is ${Multiplication(a, b)}`)
    else if(symbols[i] == '/')    console.log(`The result of ${a} / ${b} is ${Division(a, b)}`)
    else console.log("Invalid Symbol")

    i += 1
}

