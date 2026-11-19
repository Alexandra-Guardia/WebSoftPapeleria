import BotonAccion from "../BotonAccion";
import "./TablaProductos.css";

export default function TablaProductos({ productos, onEditar, onEliminar }) {
  return (
    <table className="tabla-productos">
      <thead>
        <tr>
          <th>ID</th>
          <th>PRODUCTO</th>
          <th>DESCRIPCION</th>
          <th>CANTIDAD</th>
          <th>PRECIO $</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
            <td>
              <div className="tabla-productos__acciones">
                <BotonAccion
                  texto="Editar"
                  variante="verde"
                  onClick={() => onEditar(producto.id)}
                />
                <BotonAccion
                  texto="Eliminar"
                  variante="naranja"
                  onClick={() => onEliminar(producto.id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}