function multiplication(x: number, y:number, z?:number): number{
    return typeof z !== 'undefined' ? x*y*z : x*y
}

console.log(multiplication(5, 6, 7))
console.log(multiplication(5, 6))