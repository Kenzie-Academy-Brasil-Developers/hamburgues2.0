import { InputHTMLAttributes } from "react"
import { StyledInput } from "./styled";
// tipando input, definindo oq o component tem que ser receber como parâmetro
interface IPutProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder:string;
    type:string;
    register?: object;
    name?:string;
}

export const Input =({label,type,placeholder,register,name}:IPutProps)=>{
    return(
        <StyledInput>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...register}/>
            <span className="miINput">{name}</span>
        </StyledInput>
    )
}
