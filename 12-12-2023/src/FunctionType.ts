// Function using function declaration syntax
function addFunctionDeclaration(x: number, y: number): number {
    return x + y;
}

// Function using function expression syntax
const addFunctionExpression = function (x: number, y: number): number {
    return x + y;
};

// Arrow function
const addArrowFunction = (x: number, y: number): number => x + y;



console.log(addFunctionDeclaration(67, 90));
console.log(addFunctionExpression(67, 90));
console.log(addArrowFunction(67, 90));
