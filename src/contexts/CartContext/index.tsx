import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { iChildren, iLista } from "../../api/IterfaceServ";
import { UserContext } from "../UserContext";

interface iContextDados{
    //um array de produtos
    listSec: iLista[];
    listCard:iLista[];
    filterCards: (itemFilter:string)=>void;
}

export  const CartContext = createContext <iContextDados>({} as iContextDados)

export  const CartProvider =({children}:iChildren)=>{
    // permissão do usuario
    const {setUser ,user,setLoading}=useContext(UserContext)

    // lista geral de cards renderizados
    const [listCard,setListCard]=useState<iLista[]>([]||'')
    //lista secundaria
    const [listSec,setListSec]=useState<iLista[]>([])

    // função para filtrar itens
    const filterCards=(itemFilter:string)=>{
       const trat = itemFilter.toUpperCase()
       const filter = listCard.filter((element)=>element.name.toUpperCase().includes(trat))
       setListSec(filter)
    }

    // usefect utilizado para atualizar o state caso o token existe e seja válido!
    useEffect(()=>{ 
            const requesProducts= async ()=>{
                 
                const token = localStorage.getItem('token')
                if(!token){
                    setLoading(false)
                    return;
                }
                if(token){
                    try{
                        const {data}= await Api.get('products',{
                            headers:{
                                authorization: `Bearer ${token}`}})
                                //setando lista
                                setListCard(data)
                                //listasecundaria
                                setListSec(data)
                                // permitindo usuario na página
                                setUser(200)                     
                    }catch(error){
                        console.log(error)
                    }finally{
                        setLoading(false)
                    }
                }
            }  
            requesProducts()     
    },[user])

    return(
        <CartContext.Provider value={{listSec,filterCards ,listCard}}>
            {children}
        </CartContext.Provider>
    )
}