import { useContext } from "react"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleUlCart } from "./style"
import lixo from '../../imgs/lixeira.svg'

export const LisCarrinho=()=>{
    const {itemCar,addItemCar,removeItemCar,removeItemLixeira}=useContext(ModalCOntext)
    return(
        <StyleUlCart>
            {itemCar.map((element,index)=>{
                return(
                    <li key={index}>
                        <section>
                            <footer>
                                <img src={element.img} alt={`imagem de um ${element.name}`} />
                                <aside>
                                    <h3>{element.name}</h3>
                                    <strong>
                                        <button id={element.id.toString()} onClick={(event)=>{removeItemCar(event.currentTarget.id)}} className="extra">-</button>
                                        <span>{element.count}</span>
                                        <button id={element.id.toString()}  onClick={(event)=>{addItemCar(event.currentTarget.id)}} className="extra">+</button>
                                    </strong>
                                </aside>
                            </footer>
                            <button id={element.id.toString()} onClick={(event)=>{removeItemLixeira(event.currentTarget.id)}} className='btnFinis'>
                                <img className="lixocs" src={lixo} alt="icone lixo" />
                            </button>
                        </section>
                 </li>
                )
            })}
        </StyleUlCart>
    )
}