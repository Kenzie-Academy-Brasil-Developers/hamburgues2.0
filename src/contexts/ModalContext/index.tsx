import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iChildren, iLista } from "../../api/IterfaceServ";
import { CartContext } from "../CartContext";

interface iContextDados{
    openClose:()=>void;
    openModal:boolean;
    itemCar: iLista[];
    addItemCar:(idItem:string)=> void
    setItemCar:any;
    removeItemCar:(idItem:string)=> void;
    removeItemLixeira:(idItem:string)=>void;
}


export const ModalCOntext =createContext<iContextDados>({} as iContextDados)

export  const ModalProvider =({children}:iChildren)=>{
    const {listCard}=useContext(CartContext)
    const [openModal,setOpenModal] =useState(false)

    const [itemCar,setItemCar]=useState<iLista[]>([]) 
    const openClose =()=>{
        setOpenModal(!openModal)
    }

    const addItemCar =(idItem:string)=>{
        const convert =parseInt(idItem)
        const buscItem = listCard.filter(element=>element.id===convert)

        // verificando se o item está  no carrinho
        const verifItem = itemCar.includes(buscItem[0])

       if(!verifItem){
        //add a propriedade count
         buscItem[0].count=1
        // add propridade com tratativa de adicionar
         buscItem[0].realValor=buscItem[0].price*buscItem[0].count
        toast.success('Item adicionado ao carrinho')

        setItemCar([...itemCar,buscItem[0]])
       }else{
        // se já exister no carrinho incrementa mais um
        const up = itemCar.map((element)=> {
            if(element.id===convert){
                // atualizo o contador 
                element.count++ 
            }if(element.id===convert){
                // atualizo o valorTotal
                element.realValor=element.price*element.count
            }
            return element
        })
        setItemCar(up)

       }

    }

    const removeItemCar = (idItem:string)=>{
        const convert =parseInt(idItem)
        const buscItemRemov = listCard.filter(element=>element.id===convert) 
        //verifico a quantidade de itens no carrinho antes de remover
        if(buscItemRemov[0].count===1){
            const buscItemRemov = itemCar.filter(element=>element.id!==convert) 
            setItemCar(buscItemRemov)
        }else{

            // se tiver mais de uma quantidade, nop lugar de remover eu decremento
            const up = itemCar.map((element)=> {
               if(element.id===convert){
                   // atualizo o contador 
                   element.count--
               }if(element.id===convert){
                   // atualizo o valorTotal
                   element.realValor=element.price*element.count
               }
               return element 
            })
            setItemCar(up)
        }



    }

    const removeItemLixeira =(idItem:string)=>{
        const convert =parseInt(idItem)
        const buscItemRemov = itemCar.filter(element=>element.id!==convert) 
        setItemCar(buscItemRemov)
        toast.success('Item removido com sucesso')
    }
    return(
        <ModalCOntext.Provider value={{openClose ,openModal,itemCar,addItemCar,setItemCar, removeItemCar,removeItemLixeira}}>
            {children}
        </ModalCOntext.Provider>
    )
}