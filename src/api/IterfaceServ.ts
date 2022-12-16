import { ReactNode } from "react";

export interface iChildren{
    children: ReactNode
}

export interface iLista{
    category:string;
    id: number;
    img:string;
    name: string;
    price:number;
    count:number;
    realValor:number;
}
export interface IRegister{
    name:string,
    email:string,
    password:string,
}