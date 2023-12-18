import { a, b, symbol, Addition, Subtraction, Multiplication, Division } from './Template';

const performArithmetic = (a: number, b: number, symbol: string): number => {
    if (symbol === '+') {
        return Addition(a, b);
    } else if (symbol === '-') {
        return Subtraction(a, b);
    } else if (symbol === '*') {
        return Multiplication(a, b);
    } else if (symbol === '/') {
        return Division(a, b);
    } else {
        throw new Error('Invalid Symbol!');
    }
};

const result = performArithmetic(a, b, symbol);
console.log(`The result of ${a} ${symbol} ${b} is ${result}`);
