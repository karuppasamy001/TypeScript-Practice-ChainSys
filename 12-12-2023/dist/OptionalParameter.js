"use strict";
function Mul(x, y, z) {
    if (typeof z !== 'undefined')
        return x * y * z;
    else
        return x * y;
}
console.log(Mul(5, 6, 7));
console.log(Mul(5, 6));
