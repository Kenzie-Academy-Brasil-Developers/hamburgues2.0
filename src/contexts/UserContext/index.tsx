import { createContext , useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../api/Api";
import { iChildren ,IRegister } from "../../api/IterfaceServ";

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
    RegisterApi: (reg:IRegister)=>void;
}

export const UserContext = createContext<iContextDados>({} as iContextDados)

export  const UserProvider = ({children}:iChildren)=>{
    const navegation = useNavigate()

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState<number>(0 as number)

    const RegisterApi = async (reg:IRegister)=>{
        try{
            const reponse = await Api.post('users',reg)  
        
            toast.success('Registro realizado com sucesso',{autoClose:2000})
            setTimeout(()=>{navegation('/')},2000)
            console.log(reponse.status)
        }
        catch(error){
            toast.error('Falha ao Realizar Cadastro')
            console.log(error)
        }
     }
     

    const requestLogin= async (dados:iLoginDados)=>{
      try{
        const response= await Api.post(`login`,dados)
        //seto o token
        localStorage.setItem('token',response.data.accessToken)
        const result =response.request.status 
        // atualizo o estado
        setUser(result)
        //redireciono e notifico
        setTimeout(()=>{navegation('/homepage')},1000)
        toast.success('Login efetuado com sucesso',{autoClose:3000})
        

      }
      catch(error){
        console.log(error)
        toast.error('Erro ao efetuar login',{autoClose:3000})
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
        <UserContext.Provider value={{requestLogin,user,setUser,loading,setLoading,RegisterApi}}>
                {children}
        </UserContext.Provider>
            
    )
}