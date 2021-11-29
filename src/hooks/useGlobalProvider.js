import { useLocalStorage } from 'react-use';

const useGlobalProvider = () => {
  const [token, setToken, removeToken] = useLocalStorage('token', '');

  return {
    token,
    setToken,
    removeToken,
  };
};

export default useGlobalProvider;
