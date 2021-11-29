import SetaBaixo from "./assets/setabaixo.svg";
import {useState} from 'react';
import btnsair from './assets/btnsair.svg';
import lapiseditar from './assets/lapiseditar.svg';
import './styles.css';
import useGlobalContext from "../../hooks/useGlobalContext";

const Header = (props) => {  
  const [abrirPoup, setAbrirPoup] = useState(false);
    let nome = 'geraldo junior'
    const {setToken} = useGlobalContext();
    let arrayNome = nome.trim().split(" ");
    let primeiroNome = arrayNome[0].toUpperCase();
    let segundoNome = arrayNome[1].toUpperCase();
    let inicial = primeiroNome.substr(0, 1) + segundoNome.substr(0, 1);
    
  return(
      <header>  
        <div className="sign-header sign-linha">
          <div className="sign-header-h1">
            <h1 className="font-montserrat text-size-26 color-343447">{props.children}</h1>
          </div>
          <div className="sign-name">
            <div className="sign-inicial-name color-0E8750 font-nunit text-size-22 ">{inicial}</div>
             <div className="font-nunit color-0E8750 text-size-18">{primeiroNome}</div>
              <img src={SetaBaixo} className="cursor-pointer" onClick={()=> {abrirPoup === false ? setAbrirPoup(true) : setAbrirPoup(false)}} alt="Seta Baixo"/>
              {abrirPoup && 
                <div className="container-poup-up display-flex">
                  <div className="">
                    <img className="icon-logout cursor-pointer" src={lapiseditar} alt='Editar'/>
                    <p className="font-poup-up">Editar</p>
                  </div>
                  <div>
                    <img className="icon-logout cursor-pointer" onClick={()=> setToken('')} src={btnsair} alt='Logout'/>
                    <p className="font-poup-up">Sair</p>
                  </div>
                </div>  
              }
            </div>  
        </div>  
      </header>     
     );
}          
export default Header;
