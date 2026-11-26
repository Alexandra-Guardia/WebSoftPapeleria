import { FaSearch } from "react-icons/fa";
import BotonAccion from "../BotonAccion";
import "./BarraBusqueda.css";

export default function BarraBusqueda({ valor, onCambiar, onAgregar }) {
  return (
    <div className="barra-busqueda">
      <label className="barra-busqueda__campo">
        <span className="barra-busqueda__etiqueta">
          <FaSearch /> Producto:
        </span>
        <input
          className="barra-busqueda__input"
          type="text"
          placeholder="Buscar por nombre o código"
          maxLength={100}
          value={valor}
          onChange={(e) => onCambiar(e.target.value)}
        />
      </label>
      <BotonAccion texto="Agregar" variante="turquesa" onClick={onAgregar} />
    </div>
  );
}