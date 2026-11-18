import { Routes, Route, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import ReporteVentas from "./views/ReporteVentas/ReporteVentas";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MenuLateral usuario="User" nombreNegocio="PAPELERÍA JAYA" />
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/reportes" />} />
          <Route path="/reportes" element={<ReporteVentas />} />
        </Routes>
      </main>
    </div>
  );
}