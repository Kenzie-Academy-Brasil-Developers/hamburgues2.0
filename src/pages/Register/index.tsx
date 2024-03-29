import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import  log  from '../../imgs/logan.svg'
import  wtf  from '../../imgs/wtf.svg'
import bag from '../../imgs/bag.svg'
import { StyledMain,  StyledContainer,StyledSectionDados,StyledSectionRender } from "./styled"
import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { validationRegister } from "../../schema/validation"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

interface iDadosParamentro{
    name:string,
    email:string,
    password:string,
    confPassword?:string
}

export const Register =()=>{
    const { RegisterApi}=useContext(UserContext)
     // tipifico meu use form com o tipo de objeto que ele irá receber
    const {register,handleSubmit, formState:{errors}} = useForm<iDadosParamentro>({
        resolver:yupResolver(validationRegister)
    })
    //função  para registar usuario  
    // tipifico minha função com o submitHandler (nativa do react-hook form), passando o tipo do tipo
   const onDados: SubmitHandler<iDadosParamentro>=(dados)=>{
    //removendo a propriedade confPassword
    delete dados.confPassword
    
    RegisterApi(dados) 
}
    return (
        <StyledMain>
            <StyledContainer>
                <StyledSectionRender>
                    <div>
                        <img src={log} alt="imagem log" />
                        <article>
                            <img className="icone" src={bag} alt="imagem wtf" />
                            <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
                        </article>
                        <img src={wtf} className='wtf_img' alt="imagem wtf" />
                    </div>
                </StyledSectionRender>
                <StyledSectionDados>
                    <form onSubmit={handleSubmit(onDados)}>
                        <Link to='/'>Retornar para login</Link>
                        <h2>Cadastro</h2>
                            <Input label="Nome" placeholder="Digite seu nome aqui" type="text" register={register('name')}  name={errors.name?.message}/>
                            <Input label="Email" placeholder="Digite seu email aqui" type="text" register={register('email')} name={errors.email?.message}/>             
                            <Input label="Senha" placeholder="Digite sua senha aqui" type="password" register={register('password')} name={errors.password?.message}/>
                            <Input label="Confirmar senha" placeholder="Digite novamente sua senha" register={register('confPassword')}type="password" name={errors.confPassword?.message}/>
                        <Button nome='Finalizar Cadastro'/>
                    </form>
                </StyledSectionDados>
            </StyledContainer>
        </StyledMain>
    )
    }