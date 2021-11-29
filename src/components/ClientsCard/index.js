import './styles.css';
import iconinadimplente from './assets/iconinadimplente.svg';
import iconemdia from './assets/iconemdia.svg';

const ClientsCard = (props) => {
  return(
    <>
      <div className="container-card-cliente alinhamento-first-card">
        <div className="sign-card-cliente display-flex-column">
          <div className="sign-card-cliente-titulo margem-top">
            <img src={props.children === 'Clientes em dia' ? iconemdia :  iconinadimplente} alt="Icone Inadiplente"/> 
            <h1 className="color-titulo-clientes montserrat-18">{props.children}</h1>
            <strong className="strong-geral montserrat-16 strong-cliente-color-left color-qtd-inadimplentes">10</strong>
          </div>      
          <div className="lista-clientes nunito-16">
            <h3 className="color-titulo-clientes">Cliente</h3>
            <h3 className="color-titulo-clientes">Data de venc.</h3>
            <h3 className="color-titulo-clientes">Valor</h3>
          </div>      
          <div className="card-lista-clientes nunito-14 display-flex-column">      
            <div className="lista-clientes">
              <div className="color-clientes-lista">Sara Silva</div>
              <div className="color-clientes-lista">03/02/2021</div>
              <div className="color-clientes-lista">R$ 1000,00</div>
            </div>      
            <div className="lista-clientes">
              <div className="color-clientes-lista">Sara Silva </div>
              <div className="color-clientes-lista">04/03/2021</div>
              <div className="color-clientes-lista">R$ 1000,00</div>
            </div>      
            <div className="lista-clientes">
              <div className="color-clientes-lista">Sara Silva</div>
              <div className="color-clientes-lista">21/04/2021</div>
              <div className="color-clientes-lista">R$ 1000,00</div>
            </div>      
            <div className="lista-clientes">
              <div className="color-clientes-lista">Sara Silva</div>
              <div className="color-clientes-lista">08/05/2021</div>
              <div className="color-clientes-lista">R$ 1000,00</div>
            </div>      
          </div>      
          <div className="display-flex-centralizado nunito-18">
            <a href="#">Ver Todos</a>
          </div>    
        </div>         
      </div>
    </>
  );
};

export default ClientsCard;
