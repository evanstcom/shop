export interface IItem {
    id: string;
    image: string;
    name: string;
    type: number;
    code: number;
    brand: string;
    manufacturer: string;
    description: string;
    price: number;
    size: string;
    quantity: number;
}
export interface ICreateItem {
    id?: string;
    image: string;
    name: string;
    type: number;
    code: number;
    brand: string;
    manufacturer: string;
    description: string;
    price: number;
    size: string;
    quantity: number;
}