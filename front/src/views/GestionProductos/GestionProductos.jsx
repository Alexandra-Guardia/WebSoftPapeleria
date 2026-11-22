import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaProductos from "../../components/TablaProductos";
import Modal from "../../components/Modal";
import FormularioProducto from "../../components/FormularioProducto";

const STOCK_MINIMO = 5;

//info temporal mis amiguitos zentrixeros
const productosIniciales = [
  { id: 1, nombre: "Cuaderno A5", descripcion: "", cantidad: 10, precio: 5.0, activo: true },
  { id: 2, nombre: "Lapicero Azul", descripcion: "", cantidad: 25, precio: 1.5, activo: true },
  { id: 3, nombre: "Marcador Permanente", descripcion: "", cantidad: 15, precio: 2.75, activo: true },
  { id: 4, nombre: "Regla 30 cm", descripcion: "", cantidad: 3, precio: 3.0, activo: true },
];

export default function GestionProductos() {
  const [productos, setProductos] = useState(productosIniciales);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);
  const productosActivos = productos.filter((producto) => producto.activo);

  const desactivarProducto = (id) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id ? { ...producto, activo: false } : producto
      )
    );
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
    if (productoEditando) {
      setProductos(
        productos.map((producto) =>
          producto.id === productoEditando.id
            ? { ...producto, ...datos }
            : producto
        )
      );
    } else {
      const nuevoId = productos.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      setProductos([...productos, { id: nuevoId, ...datos, activo: true }]);
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
        productos={productosActivos}
        stockMinimo={STOCK_MINIMO}
        onEditar={abrirEditar}
        onDesactivar={desactivarProducto}
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
