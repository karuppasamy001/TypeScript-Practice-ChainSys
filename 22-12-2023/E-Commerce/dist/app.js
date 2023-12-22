import { displayDiv, products } from './Modules/displayProducts.js';
displayDiv();
localStorage.clear();
export let ProductsInCart = {};
let button = document.getElementsByClassName('button-index');
function checkValidQuantity(quantity) {
    if (isNaN(Number(quantity.value))) {
        alert("Quantity should be number");
        return 0;
    }
    if (Number(quantity.value) < 0) {
        alert("Quantity cannot be less than 1");
        return 0;
    }
    return parseInt(quantity.value);
}
for (let i of button) {
    i.addEventListener('click', () => {
        let key = Number(i.id);
        const quantity = document.getElementById(i.id + '-input');
        const span = document.getElementById(i.id + '-span');
        let flag = false;
        if (span.innerHTML != "")
            flag = true;
        const count = checkValidQuantity(quantity);
        if (count != 0) {
            ProductsInCart[key] = { name: products[key].name, price: products[key].price, quantity: count };
            quantity.value = "";
            if (flag)
                span.innerHTML = `(cart Modified) ${ProductsInCart[key].quantity} - ${ProductsInCart[key].name} is added`;
            else
                span.innerHTML = `${ProductsInCart[key].quantity} - ${ProductsInCart[key].name} is added`;
        }
        localStorage.setItem('ProductsInCart', JSON.stringify(ProductsInCart));
    });
}
const proceedToPay = document.getElementById("cart");
proceedToPay.addEventListener("click", () => {
    window.location.href = './cart.html';
});
