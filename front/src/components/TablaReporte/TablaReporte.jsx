import "./TablaReporte.css";

export default function TablaReporte({ ventas }) {
  return (
    <table className="tabla tabla-reporte">
      <thead>
        <tr>
          <th>ID VENTA</th>
          <th>PRODUCTOS VENDIDOS</th>
          <th>TOTAL VENDIDO</th>
          <th>FECHA</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta) => (
          <tr key={venta.id}>
            <td>{venta.id}</td>
            <td>{venta.productos}</td>
            <td>$ {venta.total}</td>
            <td>{venta.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
