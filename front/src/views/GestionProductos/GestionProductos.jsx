import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaProductos from "../../components/TablaProductos";


//info temporal mis amiguitos zentrixeros
const productosIniciales = [
  { id: 1, nombre: "Cuaderno A5", descripcion: "", cantidad: 10, precio: "5.0" },
  { id: 2, nombre: "Lapicero Azul", descripcion: "", cantidad: 25, precio: "1.5" },
  { id: 3, nombre: "Marcador Permanente", descripcion: "", cantidad: 15, precio: "2.75" },
];

export default function GestionProductos() {
  const [productos, setProductos] = useState(productosIniciales);

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const editarProducto = (id) => {
    console.log("Editar producto", id);
  };

  return (
    <>
      <EncabezadoPagina titulo="Gestión de productos" />
      <BotonAccion texto="Agregar producto" variante="turquesa" />
      <TablaProductos
        productos={productos}
        onEditar={editarProducto}
        onEliminar={eliminarProducto}
      />
    </>
  );
}