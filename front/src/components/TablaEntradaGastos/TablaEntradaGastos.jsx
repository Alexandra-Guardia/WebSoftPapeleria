import BotonAccion from "../BotonAccion";
import "./TablaEntradaGastos.css";

export default function TablaEntradaGastos({
  registros,
  onEditar = () => {},
  onEliminar = () => {},
}) {
  return (
    <table className="tabla tabla-entradas-gastos">
      <thead>
        <tr>
          <th>FOLIO</th>
          <th>FECHA</th>
          <th>TIPO</th>
          <th>CONCEPTO</th>
          <th>IMPORTE</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {registros.map((registro) => (
          <tr key={registro.folio}>
            <td>{registro.folio}</td>
            <td>{registro.fecha}</td>
            <td>{registro.tipo}</td>
            <td>{registro.concepto}</td>
            <td>$ {registro.importe}</td>
            <td>
              <div className="tabla-entradas-gastos__acciones">
                <BotonAccion
                  texto="Editar"
                  variante="verde"
                  onClick={() => onEditar(registro.folio)}
                />
                <BotonAccion
                  texto="Eliminar"
                  variante="naranja"
                  onClick={() => onEliminar(registro.folio)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}