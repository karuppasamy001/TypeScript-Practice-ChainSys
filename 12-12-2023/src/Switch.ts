import { a, b, symbol, Addition, Subtraction, Multiplication, Division } from './Template';


const performArithmetic = (a: number, b: number, symbol: string): number => {
    switch (symbol) {
        case '+':
            return Addition(a, b);
        case '-':
            return Subtraction(a, b);
        case '*':
            return Multiplication(a, b);
        case '/':
            return Division(a, b);
        default:
            throw new Error('Invalid Symbol!');
    }
};


const result = performArithmetic(a, b, symbol);
console.log(`The result of ${a} ${symbol} ${b} is ${result}`);

