import { createContext , useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/Api";
import { iChildren } from "../../api/IterfaceServ";

interface iLoginDados{
    email:string;
    password:string;
}
interface iContextDados{
    requestLogin:(dados:iLoginDados)=>void
    user:number;
    setUser:any;
    loading:boolean;
    setLoading:any;
}

export const UserContext = createContext<iContextDados>({} as iContextDados)

export  const UserProvider = ({children}:iChildren)=>{
    const navegation = useNavigate()
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState<number>(0 as number)


    const requestLogin= async (dados:iLoginDados)=>{
      try{
        const response= await Api.post(`login`,dados)
        //seto o token
        localStorage.setItem('token',response.data.accessToken)
        const result =response.request.status 
        // atualizo o estado
        setUser(result)
        //redireciono e notifico
        navegation('/homepage')
      }
      catch(error){
        console.log(error)
      }
    }

    useEffect(()=>{
        const authoLogin=()=>{
            const token = localStorage.getItem('token')
            if(token){
                navegation('/homepage')
            }
        }
        authoLogin()
    },[])


    return(
        <UserContext.Provider value={{requestLogin,user,setUser,loading,setLoading}}>
                {children}
        </UserContext.Provider>
            
    )
}