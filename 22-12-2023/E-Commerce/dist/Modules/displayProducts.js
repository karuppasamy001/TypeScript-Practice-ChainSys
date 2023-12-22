export const products = {
    1: { name: "Laptop", price: "550000", quantity: 0 },
    2: { name: "Tablet", price: "38000", quantity: 0 },
    3: { name: "Smartphone", price: "20500", quantity: 0 },
    4: { name: "Laptop Charger", price: "5000", quantity: 0 },
    5: { name: "Mobile Charger", price: "2000", quantity: 0 }
};
export function displayDiv() {
    const productLists = document.getElementById("productLists");
    for (let i in products) {
        const div = document.createElement("div");
        div.id = `${i}-card`;
        let nameOfProduct = document.createElement("p");
        nameOfProduct.innerHTML = products[i].name + " - " + products[i].price;
        let button = document.createElement('button');
        button.id = i;
        button.className = 'button-index';
        button.innerHTML = 'Add to cart';
        let quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.placeholder = 'quantity';
        quantity.id = `${i}-input`;
        const span = document.createElement('span');
        span.id = i + '-span';
        div.appendChild(nameOfProduct);
        div.appendChild(button);
        div.appendChild(quantity);
        div.appendChild(span);
        productLists.appendChild(div);
    }
}
