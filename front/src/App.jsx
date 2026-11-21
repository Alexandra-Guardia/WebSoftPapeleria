import { Routes, Route, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import GestionProductos from "./views/GestionProductos/GestionProductos";
import RegistroVentas from "./views/RegistroVentas/RegistroVentas";
import ReporteVentas from "./views/ReporteVentas/ReporteVentas";
import GestionUsuarios from "./views/GestionUsuarios/GestionUsuarios";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MenuLateral usuario="User"/>
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<GestionProductos />} />
           <Route path="/ventas" element={<RegistroVentas />} />
          <Route path="/reportes" element={<ReporteVentas />} />
           <Route path="/usuarios" element={<GestionUsuarios />} />
        </Routes>
      </main>
    </div>
  );
}