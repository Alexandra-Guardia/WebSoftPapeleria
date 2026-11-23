import BotonAccion from "../BotonAccion";
import "./TablaProductos.css";

export default function TablaProductos({ productos, stockMinimo, onEditar, onDesactivar }) {
  return (
    <table className="tabla tabla-productos">
      <thead>
        <tr>
          <th>ID</th>
          <th>CÓDIGO</th>
          <th>PRODUCTO</th>
          <th>DESCRIPCIÓN</th>
          <th>CANTIDAD</th>
          <th>PRECIO $</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => {
          const stockBajo = producto.cantidad <= stockMinimo;
          return (
          <tr
            key={producto.id}
            className={stockBajo ? "tabla-productos__fila--bajo" : ""}
          >
            <td>{producto.id}</td>
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>
              {producto.cantidad}
              {stockBajo && (
                <span className="tabla-productos__alerta">Stock bajo</span>
              )}
            </td>
            <td>{producto.precio}</td>
            <td>
              <div className="tabla-productos__acciones">
                <BotonAccion
                  texto="Editar"
                  variante="verde"
                  onClick={() => onEditar(producto.id)}
                />
                <BotonAccion
                  texto="Desactivar"
                  variante="naranja"
                  onClick={() => onDesactivar(producto.id)}
                />
              </div>
            </td>
          </tr>
        );
        })}
      </tbody>
    </table>
  );
}