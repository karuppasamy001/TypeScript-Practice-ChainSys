class Calculator {
    get calculate() {
        return {
            plus: (a, b) => this.operations(a, b, '+'),
            minus: (a, b) => this.operations(a, b, '-'),
            mul: (a, b) => this.operations(a, b, '*'),
            div: (a, b) => this.operations(a, b, '/'),
            AC: (a, b) => this.operations(a, b, 'c')
        };
    }
    operations(a, b, typeOfOperation) {
        let result = 0;
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
                result = a / b;
                break;
            case 'c':
                return result;
            default:
                throw new Error('Invalid operation type');
        }
        return result;
    }
}
const button = document.getElementsByTagName('button');
const h1 = document.getElementById('output');
const calculator = new Calculator();
let defaultValues = 0;
for (let i of button) {
    i.addEventListener("click", () => {
        const input = document.getElementById("value");
        const newValue = parseFloat(input.value);
        defaultValues = calculator.calculate[i.id](defaultValues, newValue);
        input.value = "";
        h1.innerHTML = `Result : ${defaultValues}`;
    });
}
export {};
