function Add(a: number, b :number): number 
function Add(a: number, b :number, c: number): number 
function Add(a: number, b :number, c?: number): number { 
    if (c) return a + b + c 
    else return a + b
}

console.log(Add(5, 6, 7))
console.log(Add(5 ,6))