import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleUl } from "./style"

export const ListCards = ()=>{
     const {listSec}=useContext(CartContext)  
     const {addItemCar}=useContext(ModalCOntext)
    


    return(
        <StyleUl>
            {listSec.length===0?<article><h1>Nenhum item encontrado</h1></article>:listSec.map((element)=>{
              return( 
              <li key={element.id}>
                    <img src={element.img} alt='imagem de aleatória' />
                    <div>
                        <h3>{element.name}</h3>
                        <span>{element.category}</span>
                        <p>R$ {element.price.toFixed(2)}</p>
                        <button id={element.id.toString()}  onClick={(event)=>{addItemCar(event.currentTarget.id)}}>Adicionar</button>
                    </div>
                </li>
              )
            })}
        </StyleUl>
    )
}