import { useContext } from "react"
import { toast } from "react-toastify"
import { ModalCOntext } from "../../contexts/ModalContext"
import { StyleTotalContainer } from "./style"

export  const TotalCart =()=>{
    const{itemCar,setItemCar}=useContext(ModalCOntext)
    const valueTotal = itemCar.reduce((initi,current)=>current.realValor+initi,0).toFixed(2)

    const removeAll =()=>{
        setItemCar([])
        toast.success('Items removidos com sucesso')
    }
    return(
        <StyleTotalContainer>
            <div>
                <p>Total</p>
                <span>$ {valueTotal}</span>
            </div>
            <button onClick={removeAll}>Remover todos</button>
        </StyleTotalContainer>
    )
}