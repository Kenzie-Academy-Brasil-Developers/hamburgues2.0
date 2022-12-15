import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { StyleUl } from "./style"

export const ListCards = ()=>{
     const {listSec}=useContext(CartContext)
    
    return(
        <StyleUl>
            {listSec.map((element)=>{
              return( 
              <li key={element.id}>
                    <img src={element.img} alt='imagem de aleatória' />
                    <div>
                        <h3>{element.name}</h3>
                        <span>{element.category}</span>
                        <p>R$ {element.price}</p>
                        <button>Adicionar</button>
                    </div>
                </li>
              )
            })}
        </StyleUl>
    )
}