import { useContext } from "react"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleContainer } from "./style"

export const ModalCarrinho = ()=>{
    const {openClose}=useContext(ModalCOntext)
    return(
        <StyleContainer>
            <h1>TO AQUI CARALHO</h1>
            <button onClick={openClose}>X</button>
        </StyleContainer>
    )
}