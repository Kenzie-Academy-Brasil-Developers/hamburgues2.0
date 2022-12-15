import { createContext, useState } from "react";
import { iChildren } from "../../api/IterfaceServ";

interface iContextDados{
    openClose:()=>void;
    openModal:boolean;
}
export const ModalCOntext =createContext<iContextDados>({} as iContextDados)


export  const ModalProvider =({children}:iChildren)=>{
    const [openModal,setOpenModal] =useState(false)
    const openClose =()=>{
        setOpenModal(!openModal)
    }

    return(
        <ModalCOntext.Provider value={{openClose ,openModal}}>
            {children}
        </ModalCOntext.Provider>
    )
}