export interface Operations {
    operations (a: number, b: number, typeOfOperation: string) : number;
}

export interface Operators {
    [key: string]: (a: number, b: number) => number;
}