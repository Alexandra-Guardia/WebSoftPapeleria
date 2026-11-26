import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BarraBusqueda from "../../components/BarraBusqueda";
import TablaVenta from "../../components/TablaVenta";
import TotalVenta from "../../components/TotalVenta";
import MetodoPago from "../../components/MetodoPago";
import BotonAccion from "../../components/BotonAccion";
import CampoImporte from "../../components/CampoImporte";
import Aviso from "../../components/Aviso";
import "./RegistroVentas.css";

const catalogo = [
  { id: 1, codigo: "CUA01-00001", nombre: "Cuaderno A5", precio: 5.0 },
  { id: 2, codigo: "LAP01-00001", nombre: "Lapicero Azul", precio: 1.5 },
  { id: 3, codigo: "MAR01-00001", nombre: "Marcador Permanente", precio: 2.75 },
];

const MAX_CANTIDAD = 999;
const IMPORTE_VALIDO = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
const MAX_IMPORTE = 99999999.99;

export default function RegistroVentas() {
  const [busqueda, setBusqueda] = useState("");
  const [productosVenta, setProductosVenta] = useState([]);
  const [metodoPago, setMetodoPago] = useState("");
  const [importeRecibido, setImporteRecibido] = useState("");
  const [aviso, setAviso] = useState({ mensaje: "", tipo: "error" });

  const total = Number(
    productosVenta
      .reduce((suma, p) => suma + p.cantidad * p.precio, 0)
      .toFixed(2)
  );

  const cambio = Math.max(0, Number((Number(importeRecibido || 0) - total).toFixed(2)));

  const agregarProducto = () => {
    const texto = busqueda.trim().toLowerCase();
    if (!texto) {
      setAviso({
        mensaje: "Escribe el nombre o el código del producto",
        tipo: "error",
      });
      return;
    }

    const encontrado = catalogo.find((p) =>
      p.nombre.toLowerCase().includes(texto) ||
      p.codigo.toLowerCase().includes(texto)
    );
    if (!encontrado) {
      setAviso({ mensaje: "Producto no encontrado", tipo: "error" });
      return;
    }

    const yaAgregado = productosVenta.find((p) => p.id === encontrado.id);
    if (yaAgregado) {
      if (yaAgregado.cantidad >= MAX_CANTIDAD) {
        setAviso({
          mensaje: "La cantidad máxima por producto es " + MAX_CANTIDAD,
          tipo: "error",
        });
        return;
      }
      setProductosVenta(
        productosVenta.map((p) =>
          p.id === encontrado.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setProductosVenta([...productosVenta, { ...encontrado, cantidad: 1 }]);
    }
    setBusqueda("");
  };

  const eliminarProducto = (id) => {
    setProductosVenta(productosVenta.filter((p) => p.id !== id));
  };

  const cambiarCantidad = (id, valor) => {
    const cantidad = Number(valor);
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAX_CANTIDAD) {
      return;
    }
    setProductosVenta(
      productosVenta.map((p) => (p.id === id ? { ...p, cantidad } : p))
    );
  };

  const cancelarVenta = () => {
    setProductosVenta([]);
    setMetodoPago("");
    setBusqueda("");
    setImporteRecibido("");
  };

  const registrarVenta = () => {
    if (productosVenta.length === 0) {
      setAviso({ mensaje: "Agrega al menos un producto", tipo: "error" });
      return;
    }
    if (!metodoPago) {
      setAviso({ mensaje: "Elige un método de pago", tipo: "error" });
      return;
    }
    if (!IMPORTE_VALIDO.test(importeRecibido)) {
      setAviso({
        mensaje: "El importe recibido debe ser un número con máximo 2 decimales",
        tipo: "error",
      });
      return;
    }
    if (Number(importeRecibido) > MAX_IMPORTE) {
      setAviso({
        mensaje: "El importe recibido no puede ser mayor a 99999999.99",
        tipo: "error",
      });
      return;
    }
    if (Number(importeRecibido) < total) {
      setAviso({
        mensaje: "El importe recibido debe ser igual o mayor al total",
        tipo: "error",
      });
      return;
    }

    cancelarVenta();
    setAviso({
      mensaje: "Venta registrada por $ " + total + ". Cambio: $ " + cambio,
      tipo: "exito",
    });
  };

  return (
    <>
      <EncabezadoPagina titulo="Ventas" />
      <Aviso
        mensaje={aviso.mensaje}
        tipo={aviso.tipo}
        onCerrar={() => setAviso({ mensaje: "", tipo: "error" })}
      />
      <BarraBusqueda
        valor={busqueda}
        onCambiar={setBusqueda}
        onAgregar={agregarProducto}
      />
      <h2 className="ventas__subtitulo">Productos seleccionados</h2>
      <TablaVenta
        productos={productosVenta}
        onEliminar={eliminarProducto}
        onCambiarCantidad={cambiarCantidad}
      />
      <TotalVenta etiqueta="TOTAL" monto={total} destacado />
      <MetodoPago
        opciones={["Efectivo"]}
        seleccionado={metodoPago}
        onCambiar={setMetodoPago}
      />
      <CampoImporte
        etiqueta="Importe recibido"
        valor={importeRecibido}
        onCambio={setImporteRecibido}
      />
      <TotalVenta etiqueta="Cambio" monto={cambio} />
      <div className="ventas__acciones">
        <BotonAccion texto="Registrar venta" variante="verde" onClick={registrarVenta} />
        <BotonAccion texto="Cancelar venta" variante="naranja" onClick={cancelarVenta} />
      </div>
    </>
  );
}