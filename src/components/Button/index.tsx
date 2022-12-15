import { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    nome:string;
    onClick?:any;
}
export const Button =({nome ,onClick}:IButtonProps)=>{
    return <StyledButton onClick={onClick}>{nome}</StyledButton>
}
