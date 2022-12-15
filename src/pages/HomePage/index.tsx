import { Header } from "../../components/Header"
import { ListCards } from "../../components/ListCard"
import { StyleContainer } from "./style"
export const HomePage =()=>{
    return (
        <>
        <Header/>
        <StyleContainer>
            <ListCards/>
        </StyleContainer>
        </>
    )
}