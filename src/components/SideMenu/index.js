import BtnClientes from './assets/btnclientes.svg';
import BtnCobrancas from './assets/btncobrancas.svg';
import BtnHome from './assets/btnhome.svg';
import { NavLink } from 'react-router-dom';
import './styles.css';


const SideMenu = () => {
  return(
    <div className="sign-nav">    
      <div className="sign-nav-menu sign-nav-texto">          
        <NavLink to="/home">
          <div className="sign-nav-alinhamento item">
            <img
              className="btn-nav cursor-pointer"
              src={BtnHome}
              alt="Botao Home"                   
              />
            <p className="cursor-pointer">Home</p>                  
          </div> 
        </NavLink>    
        <NavLink to="/clientes">
          <div className="sign-nav-alinhamento item">
            <img
              className= "btn-nav cursor-pointer"
              src={BtnClientes}
              alt="Botao Home"                  
              />      
            <p className="cursor-pointer">Clientes</p>           
          </div>      
        </NavLink>
        <NavLink to="/cobrancas">
          <div className= "sign-nav-alinhamento item">
            <img
              className="btn-nav cursor-pointer"
              src={BtnCobrancas}
              alt="Botao Home"                 
              />  
            <p className="cursor-pointer">Cobranças</p>                
          </div>
        </NavLink>
      </div>
    </div>
  ); 
};

export default SideMenu;
