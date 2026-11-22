import { FaTimes } from "react-icons/fa";
import "./Aviso.css";

function Aviso({ mensaje, tipo = "error", onCerrar }) {
  if (!mensaje) return null;

  return (
    <div className={`aviso aviso--${tipo}`} role="alert">
      <span className="aviso__mensaje">{mensaje}</span>
      <button className="aviso__cerrar" onClick={onCerrar} aria-label="Cerrar aviso">
        <FaTimes />
      </button>
    </div>
  );
}

export default Aviso;