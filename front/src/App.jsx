import { Routes, Route, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import GestionUsuarios from "./views/GestionUsuarios/GestionUsuarios";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MenuLateral usuario="User" nombreNegocio="PAPELERÍA JAYA" />
      <main className="app__contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/usuarios" />} />
          <Route path="/usuarios" element={<GestionUsuarios />} />
        </Routes>
      </main>
    </div>
  );
}