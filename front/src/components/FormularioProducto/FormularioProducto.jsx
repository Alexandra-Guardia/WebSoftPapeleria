import { useState } from "react";
import BotonAccion from "../BotonAccion";
import "./FormularioProducto.css";

const vacio = { nombre: "", descripcion: "", cantidad: "", precio: "" };

export default function FormularioProducto({ producto, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(
    producto
      ? {
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          cantidad: String(producto.cantidad),
          precio: String(producto.precio),
        }
      : vacio
  );
  const [error, setError] = useState("");

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    if (!datos.nombre.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }

    const cantidad = Number(datos.cantidad);
    if (datos.cantidad === "" || !Number.isInteger(cantidad) || cantidad < 0) {
      setError("La cantidad debe ser un número entero de 0 o mayor.");
      return;
    }

    if (datos.precio === "" || Number(datos.precio) <= 0) {
      setError("El precio debe ser mayor a 0.");
      return;
    }

    onGuardar({
      nombre: datos.nombre.trim(),
      descripcion: datos.descripcion.trim(),
      cantidad,
      precio: Number(datos.precio),
    });
  };

  return (
    <form className="formulario-producto" onSubmit={enviar}>
      <label>
        Nombre
        <input name="nombre" value={datos.nombre} onChange={cambiar} />
      </label>
      <label>
        Descripción
        <input name="descripcion" value={datos.descripcion} onChange={cambiar} />
      </label>
      <label>
        Cantidad
        <input
          name="cantidad"
          type="number"
          min="0"
          step="1"
          value={datos.cantidad}
          onChange={cambiar}
        />
      </label>
      <label>
        Precio $
        <input
          name="precio"
          type="number"
          min="0"
          step="0.01"
          value={datos.precio}
          onChange={cambiar}
        />
      </label>

      {error && <p className="formulario-producto__error">{error}</p>}

      <div className="formulario-producto__botones">
        <BotonAccion texto="Cancelar" variante="naranja" onClick={onCancelar} />
        <button type="submit" className="boton-accion boton-accion--verde">
          Guardar
        </button>
      </div>
    </form>
  );
}
