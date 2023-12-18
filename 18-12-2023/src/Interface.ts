export interface Product {
    productName: string
    productQuantity: number
}

export interface Gst extends Product{
    calculateGST(price: number, Gst: number): number
}

