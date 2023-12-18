"use strict";
function fun1(x, y) {
    let z = fun2(x);
    return z + y;
}
function fun2(x) {
    return x * x * x;
}
function fun0(x, y) {
    x += 1;
    y -= 1;
    return fun1(x, y);
}
function confusion(x, y) {
    return fun0(x, y);
}
const a = 35;
const b = 78;
console.log(confusion(a, b));
