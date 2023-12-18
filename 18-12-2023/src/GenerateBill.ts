import { Product, Gst } from "./Interface";


export class Hotel implements Product, Gst {

    public productName: string
    public productQuantity: number
    public GSTValue: number = 18
    
    constructor(selectedFoods: Product){
        this.productName = selectedFoods.productName
        this.productQuantity = selectedFoods.productQuantity

        const items: Product = {
            productName: this.productName,
            productQuantity: this.productQuantity
        }
    }

    calculateTotal(products: any): number{
        if(this.productName === 'none') alert("Please Select the Item")

        let total: number = 0
        for(let i of products){
            if( i.name === this.productName ) {
                total = i.price * this.productQuantity
                break
            }
        }
        return total
    }


    calculateGST(price: number, Gst: number = this.GSTValue): number {
        return price*0.18
    }

    
}


const products = [
    {name: 'Idly Nos 1', price: 8},
    {name: 'Dosa Nos 1', price: 40},
    {name: 'Pongal Nos 1', price: 45}, 
    {name: 'Poori Nos 2', price: 50}, 
    {name: 'Vada Nos 2', price: 15}
]

const productsLists = document.getElementById('foodItems') as HTMLSelectElement;

for (let i in products) {
    let foodItem = document.createElement("option");
    foodItem.textContent = `${products[i].name} - ${products[i].price}`;
    foodItem.value = products[i].name;

    productsLists.appendChild(foodItem);
}

const product_item: Product = {
    productName: "",
    productQuantity: 0,
};

const items = document.getElementById("foodItems") as HTMLSelectElement;
const quantity = document.getElementById("quantity") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const total = document.getElementById("totalAmount") as HTMLParagraphElement;
const gst = document.getElementById("GST") as HTMLParagraphElement;
const totalAfterGst = document.getElementById("totalAmountAfterGst") as HTMLParagraphElement;

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







