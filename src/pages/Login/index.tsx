
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import  log  from '../../imgs/logan.svg'
import  wtf  from '../../imgs/wtf.svg'
import bag from '../../imgs/bag.svg'
import { StyledMain,  StyledContainer,StyledSectionDados,StyledSectionRender } from "./styled"
export const Login =()=>{
    return (
        <StyledMain>
            <StyledContainer>
                <StyledSectionDados>
                    <form>
                        <h2>Login</h2>
                        <Input label="Email" placeholder="Digite seu email aqui" type="text"/>
                        <Input label="Senha" placeholder="Digite sua senha aqui" type="password"/>
                        <button className="buttonLogar">Logar</button>
                        <span>Cria sua conta para saborear mais delícias e matar sua fome!</span>
                        <Button nome='Acessar'/>
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