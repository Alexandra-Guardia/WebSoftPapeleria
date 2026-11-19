import { Routes, Route, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import ReporteVentas from "./views/ReporteVentas/ReporteVentas";
import RegistroVentas from "./views/RegistroVentas/RegistroVentas";
import GestionProductos from "./views/GestionProductos/GestionProductos";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MenuLateral usuario="User" nombreNegocio="PAPELERÍA JAYA" />
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/reportes" />} />
          <Route path="/reportes" element={<ReporteVentas />} />
          <Route path="/" element={<Navigate to="/ventas" />} />
          <Route path="/ventas" element={<RegistroVentas />} />
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<GestionProductos />} />
        </Routes>
      </main>
    </div>
  );
}