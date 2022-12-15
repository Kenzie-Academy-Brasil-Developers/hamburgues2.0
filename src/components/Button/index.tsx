import { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    nome:string;
    onClick?:any;
    type?:any;
}
export const Button =({nome ,onClick,type}:IButtonProps)=>{
    return <StyledButton type={type} onClick={onClick}>{nome}</StyledButton>
}
