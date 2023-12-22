export class Cart {
    constructor() {
        this.ProductsInCart = {};
        this.getProductsFromStorage();
    }
    getProductsFromStorage() {
        const storedProducts = localStorage.getItem('ProductsInCart');
        if (storedProducts) {
            this.ProductsInCart = JSON.parse(storedProducts);
        }
    }
    displayCart() {
        const cartProducts = document.getElementById("cartProducts");
        if (Object.keys(this.ProductsInCart).length === 0) {
            cartProducts.innerHTML = `Your shopping cart is empty`;
            return;
        }
        const createSpan = (text, isHeader = false) => {
            const span = document.createElement('span');
            span.textContent = text;
            span.style.padding = '5%';
            if (isHeader) {
                span.style.fontWeight = 'bold';
                span.style.textDecoration = 'underline';
            }
            return span;
        };
        const createDiv = (spans) => {
            const div = document.createElement('div');
            div.append(...spans);
            return div;
        };
        const createRow = (name, quantity, price) => {
            const spans = [createSpan(name), createSpan(quantity), createSpan(price)];
            return createDiv(spans);
        };
        let totalAmount = 0;
        cartProducts.appendChild(createDiv([
            createSpan('Item', true),
            createSpan('Quantity', true),
            createSpan('Price', true),
        ]));
        for (const key in this.ProductsInCart) {
            const { name, quantity, price } = this.ProductsInCart[key];
            const row = createRow(name, String(quantity), price + "*" + String(quantity) + " = " + String(Number(price) * quantity));
            cartProducts.appendChild(row);
            totalAmount += Number(price) * quantity;
        }
        cartProducts.appendChild(createDiv([
            createSpan('Total', true),
            createSpan('', true),
            createSpan(String(totalAmount), true),
        ]));
    }
}
