import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import imgconstrucao from './assets/construcao.svg';
import './styles.css';

const Cobrancas = () => {
  return (
    <div className='container-cobrancas'>
      <div className='sign-cobrancas'>
        <SideMenu />
        <div className='sign-cobrancas-card'>
          <Header>Cobranças</Header>        
          <div className='alinhamento-img'>
            <h1 className='sign-cobrancas-h1'>Página em contrução</h1>
            <img className='sign-cobrancas-img' src={imgconstrucao} alt='Imagem Construção'/>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Cobrancas;
