import { createContext, useContext, useState } from "react";
import { iChildren, iLista } from "../../api/IterfaceServ";
import { CartContext } from "../CartContext";

interface iContextDados{
    openClose:()=>void;
    openModal:boolean;
    itemCar: iLista[];
    addItemCar:(idItem:string)=> void
    setItemCar:any;
}
export const ModalCOntext =createContext<iContextDados>({} as iContextDados)

export  const ModalProvider =({children}:iChildren)=>{
    const {listCard}=useContext(CartContext)
    const [openModal,setOpenModal] =useState(false)

    const [itemCar,setItemCar]=useState<iLista[]>([]) 

    const addItemCar =(idItem:string)=>{
        const convert =parseInt(idItem)
        const buscItem = listCard.filter(element=>element.id===convert)
        setItemCar([...itemCar,buscItem[0]])

    }
    const openClose =()=>{
        setOpenModal(!openModal)
    }

    return(
        <ModalCOntext.Provider value={{openClose ,openModal,itemCar,addItemCar,setItemCar}}>
            {children}
        </ModalCOntext.Provider>
    )
}