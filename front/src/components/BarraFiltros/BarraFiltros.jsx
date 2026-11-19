import BotonAccion from "../BotonAccion";
import "./BarraFiltros.css";

export default function BarraFiltros({ onGenerar }) {
  return (
    <div className="barra-filtros">
      <label className="barra-filtros__etiqueta">
        Fecha inicio:
        <input className="barra-filtros__fecha" type="date" />
      </label>

      <label className="barra-filtros__etiqueta">
        Fecha fin:
        <input className="barra-filtros__fecha" type="date" />
      </label>

      <BotonAccion texto="Generar reporte" variante="azul" onClick={onGenerar} />
    </div>
  );
}