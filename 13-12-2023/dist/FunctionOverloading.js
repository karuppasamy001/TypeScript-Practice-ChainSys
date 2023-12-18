"use strict";
function Add(a, b, c) {
    if (c)
        return a + b + c;
    else
        return a + b;
}
console.log(Add(5, 6, 7));
console.log(Add(5, 6));
