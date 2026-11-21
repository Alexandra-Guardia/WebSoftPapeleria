import { FaTrash } from "react-icons/fa";
import "./TablaVenta.css";

export default function TablaVenta({ productos, onEliminar }) {
  return (
    <table className="tabla-venta">
      <thead>
        <tr>
          <th>ID</th>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>PRECIO $</th>
          <th>SUBTOTAL</th>
          <th>ELIMINAR</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
            <td>{Number((producto.cantidad * producto.precio).toFixed(2))}</td>
            <td>
              <button
                className="tabla-venta__eliminar"
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