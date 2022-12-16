import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

export  const ProtectionRoutes = ()=>{
    // verifico se o usuario tem permissão de estar na página
    const {user,loading}=useContext(UserContext)
    if(loading){
        return null
    }
    return user===200?<Outlet/>:<Navigate to='/'/>
   
}