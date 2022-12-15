import { StyleHeader } from "./style"
import  logan  from '../../imgs/logan.svg'
import  lupa  from '../../imgs/lupa.svg'
import  carinho  from '../../imgs/carinho.svg'
import  sair  from '../../imgs/sair.svg'
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ModalCOntext } from "../../contexts/ModalContext"
import { ModalCarrinho } from "../ModalCarrinho"
import { useNavigate } from "react-router-dom"

export const Header =()=>{
    const navegation =useNavigate()
    
    const {filterCards,altoPrench}=useContext(CartContext)
    const {openClose,openModal }=useContext(ModalCOntext)

    const [valuepes,setValuePesq]=useState('')
    return(
        <StyleHeader>
            <div className='divOne'>
                <img className="loganRemove" src={logan} alt="logo kenzie" />
                <div>
                    <input placeholder="Digitar pesquisa" onKeyDown={(event)=>{altoPrench(event)}} onChange={(event)=>{setValuePesq(event.currentTarget.value)}}/>
                    <button onClick={()=>{filterCards(valuepes)}}>
                        <img src={lupa} alt="" />
                    </button>
                </div>
            </div>
                <article>
                    <div>
                        <span>0</span>
                        <img onClick={openClose} src={carinho} alt="" />
                    </div>
                    <img src={sair} onClick={()=>{navegation('/')}} alt="" />
                </article>
                {openModal?<ModalCarrinho/>:null}
               
        </StyleHeader>  
    )
}