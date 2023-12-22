import {displayDiv, Products, products} from './Modules/displayProducts.js'
import {Cart} from './Modules/cart.js'

displayDiv()

localStorage.clear()

export let ProductsInCart : {
    [key: number]: Products 
} = {}

let button = document.getElementsByClassName('button-index')

function checkValidQuantity(quantity: HTMLInputElement):number{
    if(isNaN(Number(quantity.value))) {
        alert("Quantity should be number")
        return 0
    }

    if(Number(quantity.value) < 0){
        alert("Quantity cannot be less than 1")
        return 0
    } 

    return parseInt(quantity.value)
}

for(let i of button){
    i.addEventListener('click', ()=>{
        let key: number = Number(i.id)
        const quantity = document.getElementById(i.id+'-input') as HTMLInputElement 
        const span = document.getElementById(i.id+'-span') as HTMLSpanElement
        let flag = false
        if(span.innerHTML != "") flag = true
        const count = checkValidQuantity(quantity)

        if(count != 0) {
            ProductsInCart[key] = {name: products[key].name, price : products[key].price, quantity: count }
            quantity.value = ""
            if(flag) span.innerHTML = `(cart Modified) ${ProductsInCart[key].quantity} - ${ProductsInCart[key].name} is added`    
            else     span.innerHTML = `${ProductsInCart[key].quantity} - ${ProductsInCart[key].name} is added`

        }
        localStorage.setItem('ProductsInCart', JSON.stringify(ProductsInCart));

    })
}

const proceedToPay = document.getElementById("cart") as HTMLButtonElement;

proceedToPay.addEventListener("click", () => {
    window.location.href = './cart.html';
});