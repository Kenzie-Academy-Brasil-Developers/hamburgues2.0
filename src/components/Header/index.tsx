import { StyleHeader } from "./style"
import  logan  from '../../imgs/logan.svg'
import  lupa  from '../../imgs/lupa.svg'
import  carinho  from '../../imgs/carinho.svg'
import  sair  from '../../imgs/sair.svg'

export const Header =()=>{
    return(
        <StyleHeader>
            <div className='divOne'>
                <img className="loganRemove" src={logan} alt="logo kenzie" />
                <div>
                    <input placeholder="Digitar pesquisa"/>
                    <button>
                        <img src={lupa} alt="" />
                    </button>
                </div>
            </div>
                <article>
                    <div>
                        <span>0</span>
                        <img src={carinho} alt="" />
                    </div>
                    <img src={sair} alt="" />
                </article>
        </StyleHeader>
    )
}