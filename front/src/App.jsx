import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import GestionUsuarios from "./views/GestionUsuarios/GestionUsuarios";
import ReporteVentas from "./views/ReporteVentas/ReporteVentas";
import RegistroVentas from "./views/RegistroVentas/RegistroVentas";
import GestionProductos from "./views/GestionProductos/GestionProductos";
import EntradaGastos from "./views/EntradaGastos/EntradaGastos";
import Login from "./views/Login/Login";
import "./App.css";

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/login") {
    return <Login />;
  }

  return (
    <div className="app">
      <MenuLateral
        usuario="User"
        nombreNegocio="PAPELERÍA JAYA"
        onCerrarSesion={() => navigate("/login")}
      />
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/usuarios" element={<GestionUsuarios />} />
          <Route path="/reportes" element={<ReporteVentas />} />
          <Route path="/ventas" element={<RegistroVentas />} />
          <Route path="/entradas-gastos" element={<EntradaGastos />} />
          <Route path="/productos" element={<GestionProductos />} />
        </Routes>
      </main>
    </div>
  );
}