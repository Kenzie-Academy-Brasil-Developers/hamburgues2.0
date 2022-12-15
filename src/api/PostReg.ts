import { Api } from "./Api"

export interface IRegister{
    name:string,
    email:string,
    password:string,
}
export const RegisterApi = async (reg:IRegister)=>{
   try{
    const reponse = await Api.post('users',reg)
    console.log(reponse)
   }
   catch(error){
       console.log(error)
   }
}
