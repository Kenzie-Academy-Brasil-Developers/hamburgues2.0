import { createContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { iChildren } from "../../api/IterfaceServ";

interface iLista{
    category:string;
    id: number;
    img:string;
    name: string;
    price:number;
}
interface iContextDados{
    //um array de produtos
    listCard: iLista[]
}

export  const CartContext = createContext <iContextDados>({} as iContextDados)

export  const CartProvider =({children}:iChildren)=>{

    const [listCard,setListCard]=useState<iLista[]>([])

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const requesProducts= async ()=>{
                const {data} = await Api.get('products',{
                    headers:{
                        authorization: `Bearer ${token}`}})
                        //setando lista
                        setListCard(data)
            }
            requesProducts()
        }

    },[])


    return(
        <CartContext.Provider value={{listCard}}>
            {children}
        </CartContext.Provider>
    )
}