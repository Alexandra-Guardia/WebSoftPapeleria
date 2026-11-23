import "./TablaReporte.css";

export default function TablaReporte({ ventas }) {
  return (
    <table className="tabla tabla-reporte">
      <thead>
        <tr>
          <th>ID</th>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>TOTAL</th>
          <th>FECHA</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta) => (
          <tr key={venta.id}>
            <td>{venta.id}</td>
            <td>{venta.producto}</td>
            <td>{venta.cantidad}</td>
            <td>$ {venta.total}</td>
            <td>{venta.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
