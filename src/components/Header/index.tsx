import { StyleHeader } from "./style"
import  logan  from '../../imgs/logan.svg'
import  lupa  from '../../imgs/lupa.svg'
import  carinho  from '../../imgs/carinho.svg'
import  sair  from '../../imgs/sair.svg'
import { useContext, useState } from "react"
import { string } from "yup"
import { CartContext } from "../../contexts/CartContext"

export const Header =()=>{
    const {filterCards,altoPrench}=useContext(CartContext)
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
                        <img src={carinho} alt="" />
                    </div>
                    <img src={sair} alt="" />
                </article>
        </StyleHeader>  
    )
}