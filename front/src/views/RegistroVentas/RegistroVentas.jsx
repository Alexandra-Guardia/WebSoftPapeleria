import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BarraBusqueda from "../../components/BarraBusqueda";
import TablaVenta from "../../components/TablaVenta";
import TotalVenta from "../../components/TotalVenta";
import MetodoPago from "../../components/MetodoPago";
import BotonAccion from "../../components/BotonAccion";
import "./RegistroVentas.css";

const catalogo = [
  { id: 1, nombre: "Cuaderno A5", precio: 5.0 },
  { id: 2, nombre: "Lapicero Azul", precio: 1.5 },
  { id: 3, nombre: "Marcador Permanente", precio: 2.75 },
];

export default function RegistroVentas() {
  const [busqueda, setBusqueda] = useState("");
  const [productosVenta, setProductosVenta] = useState([]);
  const [metodoPago, setMetodoPago] = useState("");

  const total = Number(
    productosVenta
      .reduce((suma, p) => suma + p.cantidad * p.precio, 0)
      .toFixed(2)
  );

  const agregarProducto = () => {
    const texto = busqueda.trim().toLowerCase();
    const encontrado = catalogo.find((p) =>
      p.nombre.toLowerCase().includes(texto)
    );

    if (!texto || !encontrado) {
      alert("Producto no encontrado");
      return;
    }

    const yaAgregado = productosVenta.find((p) => p.id === encontrado.id);
    if (yaAgregado) {
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

  const cancelarVenta = () => {
    setProductosVenta([]);
    setMetodoPago("");
    setBusqueda("");
  };

  const registrarVenta = () => {
    if (productosVenta.length === 0) {
      alert("Agrega al menos un producto");
      return;
    }
    if (!metodoPago) {
      alert("Elige un método de pago");
      return;
    }
    alert("Venta registrada por $ " + total);
    cancelarVenta();
  };

  return (
    <>
      <EncabezadoPagina titulo="Ventas" />
      <BarraBusqueda
        valor={busqueda}
        onCambiar={setBusqueda}
        onBuscar={() => console.log("Buscar:", busqueda)}
        onAgregar={agregarProducto}
      />
      <h2 className="ventas__subtitulo">Productos seleccionados</h2>
      <TablaVenta productos={productosVenta} onEliminar={eliminarProducto} />
      <TotalVenta etiqueta="TOTAL" monto={total} destacado />
      <MetodoPago
        opciones={["Efectivo"]}
        seleccionado={metodoPago}
        onCambiar={setMetodoPago}
      />
      <TotalVenta etiqueta="Subtotal" monto={total} />
      <div className="ventas__acciones">
        <BotonAccion texto="Registrar venta" variante="verde" onClick={registrarVenta} />
        <BotonAccion texto="Cancelar venta" variante="naranja" onClick={cancelarVenta} />
      </div>
    </>
  );
}