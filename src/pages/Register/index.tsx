import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import  log  from '../../imgs/logan.svg'
import  wtf  from '../../imgs/wtf.svg'
import bag from '../../imgs/bag.svg'
import { StyledMain,  StyledContainer,StyledSectionDados,StyledSectionRender } from "./styled"
import { Link } from "react-router-dom"
import img from '../../imgs/ela.png'
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RegisterApi } from "../../api/PostReg"

interface iDadosParamentro{
    name:string,
    email:string,
    password:string,
    confPassword?:string
}
export interface IRegister{
    name:string,
    email:string,
    password:string,
}

export const Register =()=>{
    //não preciso tipificar meu yup
    const validation = yup.object().shape({
            name:yup.string().required('Nome Obrigatório'),
            email:yup.string().required('Email Obrigatório').email('Email inválido'),
            password:yup.string().required('Senha Obrigatória'),
            confPassword:yup.string().required('Confirmação de Senha Obrigatória'),
    })
     // tipifico meu use form com o tipo de objeto que ele irá receber
    const {register,handleSubmit, formState:{errors}} = useForm<iDadosParamentro>({
        resolver:yupResolver(validation)
    })
    //função  para registar usuario  
    // tipifico minha função com o submitHandler (nativa do react-hook form), passando o tipo do tipo
   const onDados: SubmitHandler<iDadosParamentro>=(dados)=>{
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
                    <img src={img} className='IMg' alt="img bb" />
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