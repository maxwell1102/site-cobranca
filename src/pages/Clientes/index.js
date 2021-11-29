import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import './styles.css';

const Clientes = () => {
  return (
    <div className='container-clientes'>
      <div className='sign-clientes'>
        <SideMenu />
        <div className='sign-clientes-card'>
          <Header>Clientes</Header>        
        </div>
      </div>
    </div>
  );
};

export default Clientes;
