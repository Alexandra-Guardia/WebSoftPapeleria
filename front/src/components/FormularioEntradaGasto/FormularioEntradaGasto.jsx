import { useState } from "react";
import BotonAccion from "../BotonAccion";
import BarraBusqueda from "../BarraBusqueda";
import TablaCompra from "../TablaCompra";
import CampoImporte from "../CampoImporte";
import TotalVenta from "../TotalVenta";
import "./FormularioEntradaGasto.css";

const COMPRA = "Compra de mercancía";
const GASTO = "Gasto general";

export default function FormularioEntradaGasto({
  folio,
  fecha,
  productos = [],
  onGuardar,
  onCancelar,
}) {
  const [tipo, setTipo] = useState(COMPRA);
  const [busqueda, setBusqueda] = useState("");
  const [concepto, setConcepto] = useState("");
  const [importe, setImporte] = useState("");

  const esCompra = tipo === COMPRA;
  const conceptoCompra = productos.map((producto) => producto.nombre).join(", ");
  const totalCompra = Number(
    productos
      .reduce((suma, producto) => suma + producto.cantidad * producto.costo, 0)
      .toFixed(2)
  );

  const enviar = (e) => {
    e.preventDefault();
    onGuardar({
      folio,
      fecha,
      tipo,
      concepto: esCompra ? conceptoCompra : concepto,
      importe: esCompra ? totalCompra : Number(importe),
    });
  };

  return (
    <form className="formulario-entrada-gasto" onSubmit={enviar}>
      <div className="formulario-entrada-gasto__datos">
        <label className="formulario-entrada-gasto__campo">
          Folio
          <input value={folio} readOnly />
        </label>
        <label className="formulario-entrada-gasto__campo">
          Fecha
          <input value={fecha} readOnly />
        </label>
      </div>

      <div className="formulario-entrada-gasto__tipo">
        <BotonAccion
          texto={COMPRA}
          variante={esCompra ? "azul" : "turquesa"}
          onClick={() => setTipo(COMPRA)}
        />
        <BotonAccion
          texto={GASTO}
          variante={esCompra ? "turquesa" : "azul"}
          onClick={() => setTipo(GASTO)}
        />
      </div>

      {esCompra ? (
        <>
          <BarraBusqueda
            valor={busqueda}
            onCambiar={setBusqueda}
            onAgregar={() => {}}
          />
          <TablaCompra productos={productos} />
          <label className="formulario-entrada-gasto__campo">
            Concepto (lista de productos agregados)
            <input value={conceptoCompra} readOnly />
          </label>
          <TotalVenta etiqueta="Importe total" monto={totalCompra} destacado />
        </>
      ) : (
        <>
          <label className="formulario-entrada-gasto__campo">
            Concepto
            <input
              value={concepto}
              onChange={(e) => setConcepto(e.target.value)}
              required
            />
          </label>
          <CampoImporte
            etiqueta="Importe total"
            valor={importe}
            onCambio={setImporte}
          />
        </>
      )}

      <div className="formulario-entrada-gasto__botones">
        <BotonAccion texto="Cancelar" variante="naranja" onClick={onCancelar} />
        <button type="submit" className="boton-accion boton-accion--verde">
          Guardar
        </button>
      </div>
    </form>
  );
}