
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import  log  from '../../imgs/logan.svg'
import  wtf  from '../../imgs/wtf.svg'
import bag from '../../imgs/bag.svg'
import { StyledMain,  StyledContainer,StyledSectionDados,StyledSectionRender } from "./styled"
import { useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

interface iDadosLogin{
    email:string;
    password:string;
}

export const Login =()=>{
    const navegation = useNavigate()
    const {requestLogin}=useContext(UserContext)

    const validation = yup.object().shape({
        email:yup.string().required('Email Obrigatório').email('Email inválido'),
        password:yup.string().required('Senha Obrigatória'),
})

    const {register,handleSubmit,formState:{errors}}=useForm<iDadosLogin>({
        resolver:yupResolver(validation)
    })

    const dadosLogin:SubmitHandler<iDadosLogin>=(dados)=>{
        requestLogin(dados)
    }


    return (
        <StyledMain>
            <StyledContainer>
                <StyledSectionDados>
                    <form onSubmit={handleSubmit(dadosLogin)}>
                        <h2>Login</h2>
                        <Input label="Email" placeholder="Digite seu email aqui" type="text" register={register('email')} name={errors.email?.message} />
                        <Input label="Senha" placeholder="Digite sua senha aqui" type="password" register={register('password')} name={errors.password?.message}/>
                        <button className="buttonLogar">Logar</button>
                        <span>Cria sua conta para saborear mais delícias e matar sua fome!</span>
                        <Button type={'submit'} onClick={()=>{navegation('/register')}} nome='Cadastrar'/>
                    </form>
                </StyledSectionDados>

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
            </StyledContainer>
        </StyledMain>
    )
}