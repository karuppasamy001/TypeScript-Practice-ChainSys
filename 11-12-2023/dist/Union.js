"use strict";
function currencyConvertor(dollar) {
    if (typeof dollar === 'string') {
        let convertedDollar = parseInt(dollar);
        return `${convertedDollar} Dollar = ${convertedDollar * 82} Rupees`;
    }
    else if (typeof dollar === 'number')
        return `${dollar} Dollar = ${dollar * 82} Rupees`;
    else {
        return 'Enter Valid Details';
    }
}
console.log(currencyConvertor('100$'));
console.log(currencyConvertor(50));
