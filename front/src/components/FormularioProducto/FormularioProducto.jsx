import { useState } from "react";
import BotonAccion from "../BotonAccion";
import "./FormularioProducto.css";

const CODIGO_VALIDO = /^[A-Za-z0-9-]+$/;
const ENTERO_VALIDO = /^\d+$/;
const PRECIO_VALIDO = /^\d+(\.\d{1,2})?$/;
const MAX_CANTIDAD = 999999;
const MAX_PRECIO = 99999999.99;

const vacio = { codigo: "", nombre: "", cantidad: "", cantidadMinima: "", precio: "" };

export default function FormularioProducto({ producto, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(
    producto
      ? {
          codigo: producto.codigo,
          nombre: producto.nombre,
          cantidad: String(producto.cantidad),
          cantidadMinima: String(producto.cantidadMinima),
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
    const codigo = datos.codigo.trim();
    const nombre = datos.nombre.trim();

    if (!codigo) {
      setError("El código es obligatorio.");
      return;
    }

    if (!CODIGO_VALIDO.test(codigo)) {
      setError("El código solo puede tener letras, números y guiones.");
      return;
    }

    if (!nombre) {
      setError("El nombre es obligatorio.");
      return;
    }

    const cantidad = Number(datos.cantidad);
    if (!ENTERO_VALIDO.test(datos.cantidad) || cantidad > MAX_CANTIDAD) {
      setError("La cantidad debe ser un número entero entre 0 y 999999.");
      return;
    }

    const cantidadMinima = Number(datos.cantidadMinima);
    if (
      !ENTERO_VALIDO.test(datos.cantidadMinima) ||
      cantidadMinima > MAX_CANTIDAD
    ) {
      setError("La cantidad mínima debe ser un número entero entre 0 y 999999.");
      return;
    }

    const precio = Number(datos.precio);
    if (!PRECIO_VALIDO.test(datos.precio) || precio <= 0) {
      setError("El precio debe ser mayor a 0 y tener máximo 2 decimales.");
      return;
    }
    if (precio > MAX_PRECIO) {
      setError("El precio no puede ser mayor a 99999999.99.");
      return;
    }

    onGuardar({ codigo, nombre, cantidad, cantidadMinima, precio });
  };

  return (
    <form className="formulario-producto" onSubmit={enviar}>
      <label>
        Código
        <input name="codigo" value={datos.codigo} onChange={cambiar} maxLength={20} disabled={Boolean(producto)} />
      </label>
      <label>
        Nombre
        <input name="nombre" value={datos.nombre} onChange={cambiar} maxLength={100} disabled={Boolean(producto)}/>
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
        Cantidad mínima
        <input
          name="cantidadMinima"
          type="number"
          min="0"
          step="1"
          value={datos.cantidadMinima}
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
