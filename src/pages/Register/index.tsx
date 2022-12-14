import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import  log  from '../../imgs/logan.svg'
import  wtf  from '../../imgs/wtf.svg'
import bag from '../../imgs/bag.svg'
import { StyledMain,  StyledContainer,StyledSectionDados,StyledSectionRender } from "./styled"
import { Link } from "react-router-dom"


export const Register =()=>{
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
                    <form>
                        <Link to='/'>Retornar para login</Link>
                        <h2>Cadastro</h2>
                        <Input label="Nome" placeholder="Digite seu nome aqui" type="text"/>
                        <Input label="Email" placeholder="Digite seu email aqui" type="text"/>
                        <Input label="Senha" placeholder="Digite sua senha aqui" type="password"/>
                        <Input label="Confirmar senha" placeholder="Digite novamente sua senha" type="password"/>
                        <Button nome='Cadastrar'/>
                    </form>
                </StyledSectionDados>
            </StyledContainer>
        </StyledMain>
    )
}