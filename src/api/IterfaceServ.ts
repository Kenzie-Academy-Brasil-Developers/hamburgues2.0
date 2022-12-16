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
}