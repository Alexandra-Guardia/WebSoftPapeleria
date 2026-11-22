import BotonAccion from "../BotonAccion";
import "./TablaUsuarios.css";

export default function TablaUsuarios({
  usuarios,
  onEditar = () => {},
  onEliminar = () => {},
}) {
  return (
    <table className="tabla tabla-usuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>USUARIO</th>
          <th>CORREO</th>
          <th>ROL</th>
          <th>PRIVILEGIO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.usuario}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.privilegio}</td>
            <td>
              <div className="tabla-usuarios__acciones">
                <BotonAccion
                  texto="Editar"
                  variante="verde"
                  onClick={() => onEditar(usuario.id)}
                />
                <BotonAccion
                  texto="Eliminar"
                  variante="naranja"
                  onClick={() => onEliminar(usuario.id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}