export class Hotel {
    constructor(selectedFoods) {
        this.GSTValue = 18;
        this.productName = selectedFoods.productName;
        this.productQuantity = selectedFoods.productQuantity;
        const items = {
            productName: this.productName,
            productQuantity: this.productQuantity
        };
    }
    calculateTotal(products) {
        if (this.productName === 'none')
            alert("Please Select the Item");
        let total = 0;
        for (let i of products) {
            if (i.name === this.productName) {
                total = i.price * this.productQuantity;
                break;
            }
        }
        return total;
    }
    calculateGST(price, Gst = this.GSTValue) {
        return price * 0.18;
    }
}
const products = [
    { name: 'Idly Nos 1', price: 8 },
    { name: 'Dosa Nos 1', price: 40 },
    { name: 'Pongal Nos 1', price: 45 },
    { name: 'Poori Nos 2', price: 50 },
    { name: 'Vada Nos 2', price: 15 }
];
const productsLists = document.getElementById('foodItems');
for (let i in products) {
    let foodItem = document.createElement("option");
    foodItem.textContent = `${products[i].name} - ${products[i].price}`;
    foodItem.value = products[i].name;
    productsLists.appendChild(foodItem);
}
const product_item = {
    productName: "",
    productQuantity: 0,
};
const items = document.getElementById("foodItems");
const quantity = document.getElementById("quantity");
const button = document.getElementById("button");
const total = document.getElementById("totalAmount");
const gst = document.getElementById("GST");
const totalAfterGst = document.getElementById("totalAmountAfterGst");
button.addEventListener("click", () => {
    product_item.productName = items.value;
    product_item.productQuantity = parseInt(quantity.value);
    const billing = new Hotel(product_item);
    const currentTotal = billing.calculateTotal(products);
    const gstValue = billing.calculateGST(currentTotal);
    total.innerHTML = `Your Total = ${currentTotal}`;
    gst.innerHTML = `GST (18%) = ${gstValue}`;
    totalAfterGst.innerHTML = `Grand Total = ${currentTotal + gstValue}`;
});
