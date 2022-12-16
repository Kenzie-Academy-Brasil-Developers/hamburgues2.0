import { useContext } from "react"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleTotalContainer } from "./style"

export  const TotalCart =()=>{
    const{itemCar,setItemCar}=useContext(ModalCOntext)
    const valueTotal = itemCar.reduce((initi,current)=>current.realValor+initi,0).toFixed(2)
    return(
        <StyleTotalContainer>
            <div>
                <p>Total</p>
                <span>$ {valueTotal}</span>
            </div>
            <button onClick={()=>{setItemCar([])}}>Remover todos</button>
        </StyleTotalContainer>
    )
}