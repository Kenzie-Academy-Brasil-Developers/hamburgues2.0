import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NoutFound"
import { Register } from "../pages/Register"
import { ProtectionRoutes } from "../ProtectionRout"

export const MainRout =()=>{

    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* protegendo rotas que precisam de autenticação */}
            <Route element={<ProtectionRoutes/>}>
                <Route path="/homepage" element={<HomePage/>}/>
            </Route>
            
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}