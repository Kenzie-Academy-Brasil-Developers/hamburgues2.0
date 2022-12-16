import { useContext } from "react"
import { ModalCOntext } from "../../contexts/ModalContext"
import { LisCarrinho } from "../ListCarrinho"
import { TotalCart } from "../TotalCart"
import { StyleAuxi, StyleContainer } from "./style"

export const ModalCarrinho = ()=>{
    const {openClose ,itemCar }=useContext(ModalCOntext)
    return(
        <StyleContainer>
            <StyleAuxi>
                <section>
                    <h1>Carrinho de compras</h1>
                    <button onClick={openClose}>X</button>
                </section>
                {/* só rederiza se não tiver item no carrinho */}

                {itemCar.length===0?<article>
                    <h3>Sua sacola está vazia {`:(`}</h3>
                    <p>Adicione items</p>
                </article>:null}  

                <LisCarrinho/>   

                {itemCar.length!==0?<TotalCart/>:null}
            </StyleAuxi>
        </StyleContainer>
    )
}