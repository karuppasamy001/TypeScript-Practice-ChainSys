// this is confused function try to debug the code and find the output


function fun1(x: number, y:number): number{
    let z:number = fun2(x)
    return z + y
}

function fun2(x: number):number {
    return x*x*x
}

function fun0(x: number, y:number): number{
    x += 1
    y -= 1

    return fun1(x, y)
}


function confusion(x: number, y:number): number{
    return fun0(x, y)
}


const a = 35
const b = 78

console.log(confusion(a, b))

