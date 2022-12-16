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
import { toast } from "react-toastify"

export const Header =()=>{
    const navegation =useNavigate()
    
    const {filterCards,altoPrench}=useContext(CartContext)
    const {openClose,openModal,itemCar }=useContext(ModalCOntext)

    const totalItems = itemCar.length

    const [valuepes,setValuePesq]=useState('')

    const logout =()=>{
        localStorage.clear()
        navegation('/')
        toast.success('Você deslogou com sucesso',{autoClose:3000})
    }
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
                        <span>{totalItems}</span>
                        <img onClick={openClose} src={carinho} alt="" />
                    </div>
                    <img src={sair} onClick={logout} alt="" />
                </article>
                {openModal?<ModalCarrinho/>:null}
               
        </StyleHeader>  
    )
}