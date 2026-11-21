import BotonAccion from "../BotonAccion";
import "./BarraBusqueda.css";

export default function BarraBusqueda({ valor, onCambiar, onBuscar, onAgregar }) {
  return (
    <div className="barra-busqueda">
      <BotonAccion texto="Buscar producto" variante="azul" onClick={onBuscar} />
      <input
        className="barra-busqueda__input"
        type="text"
        placeholder="Buscar producto"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      />
      <BotonAccion texto="Agregar" variante="turquesa" onClick={onAgregar} />
    </div>
  );
}