import "./styles.css";
import ActionButton from "../../components/ActionButton";
import {Screen, LeftSidebar, RightSidebar} from "../../components/Containers";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useRequests from '../../hooks/useRequests';
import useGlobalContext from "../../hooks/useGlobalContext";
import loginSchema from '../../validations/loginSchema';
import on from "./assets/on.svg";
import off from "./assets/off.svg";




const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const requests = useRequests();
  const navigate = useNavigate();
  const {setToken} = useGlobalContext();

  async function handleSubmit(event) {
    event.preventDefault();

    try {

      await loginSchema.validate({email, senha});

    } catch (error) {
      return;
    }

    const body = {email, senha};
    const resposta = await requests.post('login', body);

    if(resposta) {
      setToken(resposta.token);
      navigate("/home");
    }
  }

  return (
    <Screen>
      <LeftSidebar>
        <div className="container-lateral-text normal-montserrat">
          Gerencie todos os pagamentos da sua empresa em um só lugar.
        </div>
      </LeftSidebar>

      <RightSidebar>
        <form className="container-login-form" onSubmit={handleSubmit}>
          <h2 className="primary-title">Faça seu login!</h2>

          <div className="container-email-input">
            <label className="normal-nunito">E-mail</label>
            <input
              placeholder="Digite seu e-mail"
              className="default-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="container-password-input">
            <div className="labels-password">
              <label className="normal-nunito">Senha</label>
              <a href="/forget" className="normal-nunito link-rosa">
                Esqueceu sua senha?
              </a>
            </div>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              className="default-input"
              onChange={(e) => setSenha(e.target.value)}
            />
            <img 
            className='eye' 
            src={mostrarSenha ? on : off} 
            alt=""
            onClick={() => setMostrarSenha(!mostrarSenha)}
          />
          </div>

          <div 
          className="btn-login"
          >
          <ActionButton >Entrar</ActionButton>
          </div>

          <div className="normal-nunito flex text-center">
            <span>Ainda não possui uma conta? {""}</span>
            <a href="/signup" className="link-rosa">
              Cadastre-se
            </a>
          </div>
        </form>
      </RightSidebar>
    </Screen>
  );
};

export default Login;
