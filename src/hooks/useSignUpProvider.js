// import { useLocalStorage } from "react-use";
import { useState } from "react";

const steps = [
  {
    title: "Cadastre-se",
    subtitle: "Por favor, escreva seu nome e e-mail",
  },
  {
    title: "Escolha uma senha",
    subtitle: "Escolha uma senha segura",
  },
  {
    title: "Cadastro realizado com sucesso",
    subtitle: "E-mail e senha cadastrados com sucesso",
  },
];

const useSignUpProvider = () => {
  // TODO: Ver se faz com localStorage ou estado React
  // const [page, setPage] = useLocalStorage("page", "");
  const [page, setPage] = useState(0);
  const [dados, setDados] = useState({});

  return {
    page,
    setPage,
    steps,
    dados,
    setDados
  };
};

export default useSignUpProvider;
