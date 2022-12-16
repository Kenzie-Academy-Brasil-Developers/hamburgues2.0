import { Api } from "./Api"

export interface IRegister{
    name:string,
    email:string,
    password:string,
}
export const RegisterApi = async (reg:IRegister)=>{
   try{
    await Api.post('users',reg)  
   }
   catch(error){
       console.log(error)
   }
}
