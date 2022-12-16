import { useContext } from "react"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleUlCart } from "./style"
import lixo from '../../imgs/lixeira.svg'

export const LisCarrinho=()=>{
    const {itemCar}=useContext(ModalCOntext)
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
                                        <button className="extra">-</button>
                                        <span>0</span>
                                        <button className="extra">+</button>
                                    </strong>
                                </aside>
                            </footer>
                            <button id={element.id.toString()} className='btnFinis'>
                                <img className="lixocs" src={lixo} alt="icone lixo" />
                            </button>
                        </section>
                 </li>
                )
            })}
        </StyleUlCart>
    )
}