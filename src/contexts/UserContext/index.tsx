import { createContext ,ReactNode, useState} from "react";
import { Api } from "../../api/Api";
import { iChildren } from "../../api/IterfaceServ";

interface iLoginDados{
    email:string;
    password:string;
}
interface iContextDados{
    requestLogin:(dados:iLoginDados)=>void
}

interface iUserDados{
    accessToken:string;
    user:{
        email:string;
        id:number;
        name:string;
    }
}
export const UserContext = createContext<iContextDados>({} as iContextDados)
 
export  const UserProvider = ({children}:iChildren)=>{
    const [user,setUser]=useState<iUserDados>({} as iUserDados)

    const requestLogin= async (dados:iLoginDados)=>{
      try{
        const {data} = await Api.post(`login`,dados)

        localStorage.setItem('token',data.accessToken)
       setUser(data)
      }


      catch(error){
        console.log(error)
      }
    }


    return(
        <UserContext.Provider value={{requestLogin}}>
                {children}
        </UserContext.Provider>
            
    )
}