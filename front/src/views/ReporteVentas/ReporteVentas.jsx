import EncabezadoPagina from "../../components/EncabezadoPagina";
import BarraFiltros from "../../components/BarraFiltros";
import TablaReporte from "../../components/TablaReporte";
import TotalVenta from "../../components/TotalVenta";
import DatoResumen from "../../components/DatoResumen";

const ventasEjemplo = [
  { id: 1, producto: "Cuaderno", cantidad: 2, total: 50, fecha: "2026-01-01" },
  { id: 2, producto: "Lápiz", cantidad: 5, total: 25, fecha: "2026-01-02" },
];

export default function ReporteVentas() {
  const totalReporte = ventasEjemplo.reduce((suma, v) => suma + v.total, 0);

  return (
    <>
      <EncabezadoPagina titulo="Reportes" />
      <BarraFiltros />
      <TablaReporte ventas={ventasEjemplo} />
      <TotalVenta etiqueta="TOTAL" monto={totalReporte} destacado />
      <DatoResumen etiqueta="Cantidad de ventas" valor={ventasEjemplo.length} />
    </>
  );
}