import { FaTrash } from "react-icons/fa";
import "./TablaVenta.css";

export default function TablaVenta({ productos, onEliminar, onCambiarCantidad = () => {} }) {
  return (
    <table className="tabla tabla-venta">
      <thead>
        <tr>
          <th>CÓDIGO</th>
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
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>
              <input
                className="tabla-venta__cantidad"
                type="number"
                min="1"
                max="999"
                step="1"
                value={producto.cantidad}
                onChange={(e) => onCambiarCantidad(producto.id, e.target.value)}
                aria-label={"Cantidad de " + producto.nombre}
              />
            </td>
            <td>{producto.precio}</td>
            <td>{Number((producto.cantidad * producto.precio).toFixed(2))}</td>
            <td>
              <button
                className="tabla__eliminar"
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