import ActionButton from "../../components/ActionButton";
import imgConfirm from "./assets/confirm.svg";
import on from "./assets/on.svg";
import off from "./assets/off.svg";
import useSignUpContext from "../../hooks/useSignUpContext";
import singUpPage1Schema from '../../validations/singUp1Schema';
import singUpPage2Schema from '../../validations/singUp2Schema';
import useRequests from '../../hooks/useRequests';
import toast from '../../helpers/toast';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const EtapaDados = () => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const {dados, setDados, setPage} = useSignUpContext();

  async function handleSubmit(event) { 
    event.preventDefault();

    try{
      await singUpPage1Schema.validate({email, nome});
    }
    catch(error) {
      return;
    }

    const data = dados;

    data.nome = nome;
    data.email =email;

    setDados(data);
    setPage(1);

  }
  return (
    <form className="container-dados" onSubmit={handleSubmit}>
      <h2 className="primary-title">Adicione seus Dados</h2>

      <div className="container-dados-input">
        <label className="normal-nunito">Nome*</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="default-input"
          value={nome}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="container-dados-input">
        <label className="normal-nunito">E-mail*</label>
        <input
          type="text"
          placeholder="Digite seu E-mail"
          className="default-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="btn-dados">
        <ActionButton>Continuar</ActionButton>
      </div>
      <span className="normal-nunito">
        Já possui uma conta? Faça seu{" "}
        <a href="/signin" className="link-rosa">
          Login
        </a>
      </span>
    </form>
  );
};

const EtapaSenha = () => {
  const [senha, setSenha] = useState('');
  const [senha1, setSenha1] = useState('');
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);
  const {dados, setDados, setPage} = useSignUpContext();
  const requests = useRequests();

  async function handleSubmit(event) { 
    event.preventDefault();

    if(senha1 !== senha) {
      toast.messageError("As senhas devem coincidir");
      return;
    }

    try{
      await singUpPage2Schema.validate({senha});
    }
    catch(error) {
      return;
    }

    const data = dados;

    data.senha = senha;

    setDados(data);

    
    try {
      const resposta = await requests.post('users', dados);

      if(!resposta) throw new Error("error");
      
    } catch (error) {
      return;
    }
    
    setDados({});
    setPage(2);

  }

  return (
    <form className="container-dados" onSubmit={handleSubmit}>
      <h2 className="primary-title">Escolha uma senha</h2>

      <div className="container-dados-input">
        <label className="normal-nunito">Senha*</label>
        <input
          type={mostrarSenha1 ? "text" : "password"}
          placeholder="••••••••"
          className="default-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <img 
          className='eye' 
          src={mostrarSenha1 ? on : off} 
          alt=""
          onClick={() => setMostrarSenha1(!mostrarSenha1)}
          />
      </div>

      <div className="container-dados-input">
        <label className="normal-nunito">Repita a senha*</label>
        <input
          type={mostrarSenha2 ? "text" : "password"}
          placeholder="••••••••"
          className="default-input"
          value={senha1}
          onChange={(e) => setSenha1(e.target.value)}
        />
        <img 
          className='eye' 
          src={mostrarSenha2 ? on : off} 
          alt=""
          onClick={() => setMostrarSenha2(!mostrarSenha2)}
          />
      </div>
      <div className="btn-dados">
        <ActionButton>Cadastrar</ActionButton>
      </div>
      <span className="normal-nunito">
        Já possui uma conta? Faça seu{" "}
        <a href="/signin" className="link-rosa">
          Login
        </a>
      </span>
    </form>
  );
};

const EtapaSucesso = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-sucesso">
        <img src={imgConfirm} alt="" />
        <h2 className="primary-title">Cadastro realizado com sucesso!</h2>
      </div>
      <div className="btn-dados" onClick={()=> navigate("/signin")}>
        <ActionButton>Ir para Login</ActionButton>
      </div>
    </>
  );
};

const Etapas = () => {
  const { page } = useSignUpContext();
  return (
    <>
      {page === 0 && <EtapaDados />}
      {page === 1 && <EtapaSenha />}
      {page === 2 && <EtapaSucesso />}
    </>
  );
};

export default Etapas;
