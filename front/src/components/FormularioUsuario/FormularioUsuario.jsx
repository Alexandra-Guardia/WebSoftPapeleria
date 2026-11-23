import { useState } from "react";
import BotonAccion from "../BotonAccion";
import "./FormularioUsuario.css";

const MODULOS = ["Productos", "Ventas", "Reportes", "Usuarios"];

const vacio = {
  nombre: "",
  usuario: "",
  correo: "",
  contrasena: "",
  rol: "Vendedor",
  permisos: [],
};

export default function FormularioUsuario({ onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(vacio);

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const alternarPermiso = (modulo) => {
    setDatos({
      ...datos,
      permisos: datos.permisos.includes(modulo)
        ? datos.permisos.filter((m) => m !== modulo)
        : [...datos.permisos, modulo],
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    onGuardar(datos);
  };

  return (
    <form className="formulario-usuario" onSubmit={enviar}>
      <label>
        Nombre
        <input name="nombre" value={datos.nombre} onChange={cambiar} required />
      </label>
      <label>
        Usuario
        <input name="usuario" value={datos.usuario} onChange={cambiar} required />
      </label>
      <label>
        Correo
        <input
          name="correo"
          type="email"
          value={datos.correo}
          onChange={cambiar}
          required
        />
      </label>
      <label>
        Contraseña
        <input
          name="contrasena"
          type="password"
          autoComplete="new-password"
          value={datos.contrasena}
          onChange={cambiar}
          required
        />
      </label>
      <label>
        Rol
        <select name="rol" value={datos.rol} onChange={cambiar}>
          <option value="Administrador">Administrador</option>
          <option value="Vendedor">Vendedor</option>
        </select>
      </label>

      {datos.rol === "Vendedor" && (
        <fieldset className="formulario-usuario__permisos">
          <legend>Permisos</legend>
          {MODULOS.map((modulo) => (
            <label key={modulo} className="formulario-usuario__permiso">
              <input
                type="checkbox"
                checked={datos.permisos.includes(modulo)}
                onChange={() => alternarPermiso(modulo)}
              />
              {modulo}
            </label>
          ))}
        </fieldset>
      )}

      <div className="formulario-usuario__botones">
        <BotonAccion texto="Cancelar" variante="naranja" onClick={onCancelar} />
        <button type="submit" className="boton-accion boton-accion--verde">
          Guardar
        </button>
      </div>
    </form>
  );
}