import TotalVenta from "../TotalVenta";
import "./ResumenPeriodo.css";

export default function ResumenPeriodo({ totalVendido, totalGastado }) {
  const balance = Number((totalVendido - totalGastado).toFixed(2));

  return (
    <div className="resumen-periodo">
      <TotalVenta etiqueta="TOTAL VENDIDO" monto={totalVendido} />
      <TotalVenta etiqueta="TOTAL GASTADO" monto={totalGastado} />
      <TotalVenta etiqueta="BALANCE DEL PERIODO" monto={balance} destacado />
    </div>
  );
}