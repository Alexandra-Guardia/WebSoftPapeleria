import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaEntradaGastos from "../../components/TablaEntradaGastos";
import Modal from "../../components/Modal";
import FormularioEntradaGasto from "../../components/FormularioEntradaGasto";
import "./EntradaGastos.css";

/*son ejemplos, es para ver si funcionaba*/
const registrosEjemplo = [
  {
    folio: "E-0006",
    fecha: "2026-11-23",
    tipo: "Compra de mercancía",
    concepto: "Cuaderno profesional, Lápiz HB",
    importe: 1850,
  },
  {
    folio: "G-0005",
    fecha: "2026-11-20",
    tipo: "Gasto general",
    concepto: "Pago de luz",
    importe: 640,
  },
  {
    folio: "G-0004",
    fecha: "2026-11-15",
    tipo: "Gasto general",
    concepto: "Pago de internet",
    importe: 499,
  },
];

const productosEjemplo = [
  { id: 1, nombre: "Cuaderno profesional", cantidad: 24, costo: 38, precioNuevo: 55 },
  { id: 2, nombre: "Lápiz HB", cantidad: 10, costo: 42, precioNuevo: 60 },
  { id: 3, nombre: "Marcador negro", cantidad: 12, costo: 14.5, precioNuevo: 22 },
];

const FILTROS = ["Todos", "Compra de mercancía", "Gasto general"];

export default function EntradaGastos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [filtro, setFiltro] = useState("Todos");

  const registrosVisibles =
    filtro === "Todos"
      ? registrosEjemplo
      : registrosEjemplo.filter((registro) => registro.tipo === filtro);

  return (
    <>
      <EncabezadoPagina titulo="Entradas y Gastos" />
      <div className="entrada-gastos__barra">
        <div className="entrada-gastos__filtros">
          {FILTROS.map((opcion) => (
            <BotonAccion
              key={opcion}
              texto={opcion}
              variante={filtro === opcion ? "azul" : "turquesa"}
              onClick={() => setFiltro(opcion)}
            />
          ))}
        </div>
        <BotonAccion
          texto="Agregar registro"
          variante="verde"
          onClick={() => setModalAbierto(true)}
        />
      </div>
      <TablaEntradaGastos registros={registrosVisibles} />
      {modalAbierto && (
        <Modal titulo="Agregar registro" onCerrar={() => setModalAbierto(false)}>
          <FormularioEntradaGasto
            folio="E-0007"
            fecha="2026-11-24"
            productos={productosEjemplo}
            onGuardar={() => setModalAbierto(false)}
            onCancelar={() => setModalAbierto(false)}
          />
        </Modal>
      )}
    </>
  );
}