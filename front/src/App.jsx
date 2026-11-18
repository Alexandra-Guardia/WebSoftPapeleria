import { Routes, Route, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import RegistroVentas from "./views/RegistroVentas/RegistroVentas";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MenuLateral usuario="User" nombreNegocio="PAPELERÍA JAYA" />
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/ventas" />} />
          <Route path="/ventas" element={<RegistroVentas />} />
        </Routes>
      </main>
    </div>
  );
}