import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BarraFiltros from "../../components/BarraFiltros";
import TablaReporte from "../../components/TablaReporte";
import TablaGastos from "../../components/TablaGastos";
import DatoResumen from "../../components/DatoResumen";
import ResumenPeriodo from "../../components/ResumenPeriodo";
import Aviso from "../../components/Aviso";
import "./ReporteVentas.css";

const FECHA_VALIDA = /^\d{4}-\d{2}-\d{2}$/;
const FECHA_MINIMA = "2000-01-01";

const ventasEjemplo = [
  { id: 1, productos: "Cuaderno x2", total: 50, fecha: "2026-01-01" },
  { id: 2, productos: "Lápiz x5", total: 25, fecha: "2026-01-02" },
  { id: 3, productos: "Folder x3, Pegamento x1", total: 40, fecha: "2026-01-15" },
];

const gastosEjemplo = [
  { id: 1, concepto: "Compra de papel", fecha: "2026-01-02", monto: 30 },
  { id: 2, concepto: "Pago de luz", fecha: "2026-01-10", monto: 120 },
];

export default function ReporteVentas() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [ventasReporte, setVentasReporte] = useState([]);
  const [gastosReporte, setGastosReporte] = useState([]);
  const [aviso, setAviso] = useState({ mensaje: "", tipo: "error" });

  const fechaMaxima = new Date().toLocaleDateString("en-CA");
  const totalVendido = ventasReporte.reduce((suma, v) => suma + v.total, 0);
  const totalGastado = gastosReporte.reduce((suma, g) => suma + g.monto, 0);

  const generarReporte = () => {
    if (!fechaInicio || !fechaFin) {
      setAviso({ mensaje: "Elige la fecha de inicio y la fecha fin", tipo: "error" });
      return;
    }
    if (!FECHA_VALIDA.test(fechaInicio) || !FECHA_VALIDA.test(fechaFin)) {
      setAviso({ mensaje: "Las fechas deben tener año de 4 dígitos", tipo: "error" });
      return;
    }
    if (fechaInicio < FECHA_MINIMA || fechaFin < FECHA_MINIMA) {
      setAviso({ mensaje: "Las fechas deben ser a partir del 01/01/2000", tipo: "error" });
      return;
    }
    if (fechaInicio > fechaMaxima || fechaFin > fechaMaxima) {
      setAviso({ mensaje: "Las fechas no pueden ser futuras", tipo: "error" });
      return;
    }
    if (fechaInicio > fechaFin) {
      setAviso({
        mensaje: "La fecha de inicio no puede ser mayor a la fecha fin",
        tipo: "error",
      });
      return;
    }

    const enPeriodo = (registro) =>
      registro.fecha >= fechaInicio && registro.fecha <= fechaFin;

    setVentasReporte(ventasEjemplo.filter(enPeriodo));
    setGastosReporte(gastosEjemplo.filter(enPeriodo));
    setAviso({ mensaje: "", tipo: "error" });
  };

  return (
    <>
      <Aviso
        mensaje={aviso.mensaje}
        tipo={aviso.tipo}
        onCerrar={() => setAviso({ mensaje: "", tipo: "error" })}
      />
      <EncabezadoPagina titulo="Reportes" />
      <BarraFiltros
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        fechaMinima={FECHA_MINIMA}
        fechaMaxima={fechaMaxima}
        onCambiarInicio={setFechaInicio}
        onCambiarFin={setFechaFin}
        onGenerar={generarReporte}
      />

      <h2 className="reporte__seccion">Ventas</h2>
      <TablaReporte ventas={ventasReporte} />
      <DatoResumen etiqueta="Cantidad de ventas" valor={ventasReporte.length} />

      <h2 className="reporte__seccion">Gastos</h2>
      <TablaGastos gastos={gastosReporte} />
      <DatoResumen etiqueta="Cantidad de gastos" valor={gastosReporte.length} />

      <ResumenPeriodo totalVendido={totalVendido} totalGastado={totalGastado} />
    </>
  );
}