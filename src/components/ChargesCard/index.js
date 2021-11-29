import './styles.css';

const ChargesCard = (props) => {
  return(
    <div className="container-card-lista">
        <div className="sign-card-lista display-flex-column alinhar-first-card">
          <div className="sign-card-lista-titulo display-flex">
            <h1 className="color-titulos-e-sub-titulos montserrat-18 ">{props.children}</h1>
            <strong className="strong-geral montserrat-16 color-strong-vencidas">08</strong>
          </div>
          <div className="titulo-card">
            <h3 className="color-titulos-e-sub-titulos nunito-16">Cliente</h3>
            <h3 className="color-titulos-e-sub-titulos nunito-16">ID da cob.</h3>
            <h3 className="color-titulos-e-sub-titulos nunito-16">Valor</h3>
          </div>
          <div className="card-lista-clientes display-flex-column">
            <div className="lista-clientes">
              <div className="nunito-14 color-neutral-dark">Sara Silva</div>
              <div className="nunito-14 color-neutral-dark">223456787</div>
              <div className="nunito-14 color-neutral-dark">R$ 1000,00</div>
            </div>
            <div className="lista-clientes">
              <div className="nunito-14 color-neutral-dark">Sara Silva</div>
              <div className="nunito-14 color-neutral-dark">223456787</div>
              <div className="nunito-14 color-neutral-dark">R$ 1000,00</div>
            </div>
            <div className="lista-clientes">
              <div className="nunito-14 color-neutral-dark">Sara Silva</div>
              <div className="nunito-14 color-neutral-dark">223456787</div>
              <div className="nunito-14 color-neutral-dark">R$ 1000,00</div>
            </div>
            <div className="lista-clientes">
              <div className="nunito-14 color-neutral-dark">Sara Silva</div>
              <div className="nunito-14 color-neutral-dark">223456787</div>
              <div className="nunito-14 color-neutral-dark">R$ 1000,00</div>
            </div>
          </div>
          <div className="display-flex-centralizado nunito-18">
            <a href="#">Ver Todos</a>
          </div>
        </div>        
      </div>
   
  );
}

export default ChargesCard;
