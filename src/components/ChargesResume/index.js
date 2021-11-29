import iconpagas from './assets/iconcobpagas.svg';
import iconprevistas from './assets/iconcobprevistas.svg';
import iconvencidas from './assets/iconcobvencidas.svg';
import './styles.css';

const ChargesResume = () => {
  return(
    <div className="card-resumo-alinhamento display-flex">
      <div className="card-resumo color-EEF6F6 display-flex">
        <img src={iconpagas} alt="Icone Pagas"/>
        <div className="display-flex-column-centralizado">
          <h3 className="montserrat-18 color-h3-p">Cobranças Pagas</h3>
          <p className="normal-montserrat color-h3-p">R$ 30.000</p>
        </div>
      </div>
      
      <div className="card-resumo color-FFEFEF display-flex">
        <img src={iconvencidas} alt="Icone Pagas"/>
        <div className="display-flex-column-centralizado">
          <h3 className="montserrat-18 color-h3-p">Cobranças Vencidas</h3>
          <p className="normal-montserrat color-h3-p">R$ 7.000</p>
        </div>
      </div>
      
      <div className="card-resumo color-FCF6DC display-flex">
        <img src={iconprevistas} alt="Icone Pagas"/>
        <div className="display-flex-column-centralizado">
          <h3 className="montserrat-18 color-h3-p">Cobranças Previstas</h3>
          <p className="normal-montserrat color-h3-p">R$ 10.000</p>
        </div>
      </div>       
    </div>    
  ); 
};

export default ChargesResume;
