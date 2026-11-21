import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaProductos from "../../components/TablaProductos";
import Modal from "../../components/Modal";
import FormularioProducto from "../../components/FormularioProducto";

const STOCK_MINIMO = 5;

//info temporal mis amiguitos zentrixeros
const productosIniciales = [
  { id: 1, nombre: "Cuaderno A5", descripcion: "", cantidad: 10, precio: "5.0" },
  { id: 2, nombre: "Lapicero Azul", descripcion: "", cantidad: 25, precio: "1.5" },
  { id: 3, nombre: "Marcador Permanente", descripcion: "", cantidad: 15, precio: "2.75" },
  { id: 4, nombre: "Regla 30 cm", descripcion: "", cantidad: 3, precio: "3.0", stockBajo: true },
];

export default function GestionProductos() {
  const [productos, setProductos] = useState(productosIniciales);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const abrirAgregar = () => {
    setProductoEditando(null);
    setModalAbierto(true);
  };

  const abrirEditar = (id) => {
    setProductoEditando(productos.find((producto) => producto.id === id));
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProductoEditando(null);
  };

  const guardarProducto = (datos) => {
    const conAlerta = { ...datos, stockBajo: datos.cantidad <= STOCK_MINIMO };

    if (productoEditando) {
      setProductos(
        productos.map((producto) =>
          producto.id === productoEditando.id
            ? { ...producto, ...conAlerta }
            : producto
        )
      );
    } else {
      const nuevoId = productos.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      setProductos([...productos, { id: nuevoId, ...conAlerta }]);
    }
    cerrarModal();
  };

  return (
    <>
      <EncabezadoPagina titulo="Gestión de productos" />
      <BotonAccion
        texto="Agregar producto"
        variante="turquesa"
        onClick={abrirAgregar}
      />
      <TablaProductos
        productos={productos}
        onEditar={abrirEditar}
        onEliminar={eliminarProducto}
      />

      {modalAbierto && (
        <Modal
          titulo={productoEditando ? "Editar producto" : "Agregar producto"}
          onCerrar={cerrarModal}
        >
          <FormularioProducto
            producto={productoEditando}
            onGuardar={guardarProducto}
            onCancelar={cerrarModal}
          />
        </Modal>
      )}
    </>
  );
}
