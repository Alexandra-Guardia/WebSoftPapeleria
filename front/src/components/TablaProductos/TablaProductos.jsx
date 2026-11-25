import BotonAccion from "../BotonAccion";
import "./TablaProductos.css";

export default function TablaProductos({ productos, onEditar, onDesactivar }) {
  return (
    <table className="tabla tabla-productos">
      <thead>
        <tr>
          <th>CÓDIGO</th>
          <th>PRODUCTO</th>
          <th>PRECIO $</th>
          <th>CANTIDAD</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => {
          const stockBajo = producto.cantidad <= producto.cantidadMinima;
          return (
          <tr
            key={producto.id}
            className={stockBajo ? "tabla-productos__fila--bajo" : ""}
          >
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>
              {producto.cantidad}
              {stockBajo && (
                <span className="tabla-productos__alerta">Stock bajo</span>
              )}
            </td>
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