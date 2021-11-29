import ChargesCard from '../../components/ChargesCard';
import ChargesResume from '../../components/ChargesResume';
import ClientsCard from '../../components/ClientsCard';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import './styles.css';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='sign-home'>
        <SideMenu />
        <div className='sign-home-card'>
          <Header>Resumo das cobranças</Header>
          <ChargesResume />
          <div className="display-flex">
            <ChargesCard>Cobranças Vencidas</ChargesCard>
            <ChargesCard>Cobranças Previstas</ChargesCard>
            <ChargesCard>Cobranças Pagas</ChargesCard>
          </div>
          <div className="display-flex">
            <ClientsCard>Clientes Inadimplentes</ClientsCard>
            <ClientsCard>Clientes em dia</ClientsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
