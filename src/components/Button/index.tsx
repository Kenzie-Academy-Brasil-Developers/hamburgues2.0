import { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    nome:string;
}
export const Button =({nome}:IButtonProps)=>{
    return <StyledButton>{nome}</StyledButton>
}
