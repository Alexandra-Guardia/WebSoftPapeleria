import "./TotalVenta.css";

export default function TotalVenta({ etiqueta, monto, destacado = false }) {
  return (
    <p className={destacado ? "total-venta total-venta--destacado" : "total-venta"}>
      {etiqueta}: $ {monto}
    </p>
  );
}