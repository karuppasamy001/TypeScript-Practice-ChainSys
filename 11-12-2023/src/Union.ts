type Dollar = string | number;

const EXCHANGE_RATE = 82; // Replace with the actual exchange rate

function currencyConverter(dollar: Dollar): string {
    const convertedDollar = typeof dollar === 'string' ? parseInt(dollar) : dollar;
    const rupees = convertedDollar * EXCHANGE_RATE;

    if (!isNaN(rupees)) {
        return `${convertedDollar} Dollar = ${rupees} Rupees (at an exchange rate of ${EXCHANGE_RATE} Rupees per Dollar)`;
    } else {
        return 'Enter Valid Details';
    }
}

console.log(currencyConverter('100$'));
console.log(currencyConverter(50));
