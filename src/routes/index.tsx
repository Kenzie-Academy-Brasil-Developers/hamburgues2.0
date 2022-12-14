import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NoutFound"
import { Register } from "../pages/Register"

export const MainRout =()=>{

    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
            
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}