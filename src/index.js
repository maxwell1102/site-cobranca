import { render } from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from "./contexts/GlobalContext";
import "./global.css";
import useGlobalContext from "./hooks/useGlobalContext";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Cobrancas from "./pages/Cobrancas";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";


const rootElement = document.getElementById("root");


function ProtectedRoute({ children }) {
  const {token} = useGlobalContext();
  return token ? children : <Navigate to="/signin" />;
}
render(
  <GlobalProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <ProtectedRoute>
              <Clientes/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cobrancas"
          element={
            <ProtectedRoute>
              <Cobrancas/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  </GlobalProvider>,
  rootElement
);
