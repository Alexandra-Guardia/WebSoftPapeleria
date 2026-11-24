import { FaTrash } from "react-icons/fa";
import "./TablaCompra.css";

export default function TablaCompra({ productos, onEliminar = () => {} }) {
  return (
    <table className="tabla tabla-compra">
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>COSTO UNITARIO $</th>
          <th>PRECIO NUEVO $</th>
          <th>SUBTOTAL</th>
          <th>ELIMINAR</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.costo}</td>
            <td>{producto.precioNuevo}</td>
            <td>{Number((producto.cantidad * producto.costo).toFixed(2))}</td>
            <td>
              <button
                type="button"
                className="tabla__eliminar"
                aria-label="Quitar producto"
                onClick={() => onEliminar(producto.id)}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}