import { useState } from "react";
import { FaMobileAlt, FaLock } from "react-icons/fa";
import CampoLogin from "../CampoLogin";
import "./FormularioLogin.css";

const vacio = { telefono: "", contrasena: "", recordar: true };

export default function FormularioLogin({ onIngresar = () => {} }) {
  const [datos, setDatos] = useState(vacio);
  const [error, setError] = useState("");

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const cambiarTelefono = (e) => {
    setDatos({ ...datos, telefono: e.target.value.replace(/\D/g, "").slice(0, 10) });
  };

  const alternarRecordar = () => {
    setDatos({ ...datos, recordar: !datos.recordar });
  };

  const enviar = (e) => {
    e.preventDefault();
    if (datos.telefono === "") {
      setError("El teléfono es obligatorio.");
      return;
    }
    if (datos.telefono.length !== 10) {
      setError("El teléfono debe tener 10 dígitos.");
      return;
    }
    if (datos.contrasena.trim() === "") {
      setError("La contraseña es obligatoria.");
      return;
    }
    if (datos.contrasena.length > 20) {
      setError("La contraseña no puede tener más de 20 caracteres.");
      return;
    }

    setError("");
    const mensaje = onIngresar(datos);
    if (mensaje) {
      setError(mensaje);
    }
  };

  return (
    <form className="formulario-login" onSubmit={enviar}>
      <CampoLogin
        icono={FaMobileAlt}
        nombre="telefono"
        tipo="tel"
        valor={datos.telefono}
        placeholder="Número de teléfono"
        prefijo="+52"
        autoComplete="tel-national"
        onCambio={cambiarTelefono}
      />
      <CampoLogin
        icono={FaLock}
        nombre="contrasena"
        tipo="password"
        valor={datos.contrasena}
        placeholder="Contraseña"
        maxLength={20}
        autoComplete="current-password"
        onCambio={cambiar}
      />

      <label className="formulario-login__recordar">
        <input
          type="checkbox"
          checked={datos.recordar}
          onChange={alternarRecordar}
        />
        Recordarme en este equipo
      </label>

      {error && <p className="formulario-login__error" role="alert">{error}</p>}

      <button
        type="submit"
        className="boton-accion boton-accion--turquesa formulario-login__boton"
      >
        Iniciar sesión
      </button>
    </form>
  );
}