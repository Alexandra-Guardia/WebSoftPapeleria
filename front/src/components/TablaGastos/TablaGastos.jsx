import "./TablaGastos.css";

export default function TablaGastos({ gastos }) {
  return (
    <table className="tabla tabla-gastos">
      <thead>
        <tr>
          <th>EN QUÉ SE GASTÓ</th>
          <th>FECHA</th>
          <th>MONTO</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto) => (
          <tr key={gasto.id}>
            <td>{gasto.concepto}</td>
            <td>{gasto.fecha}</td>
            <td>$ {gasto.monto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}