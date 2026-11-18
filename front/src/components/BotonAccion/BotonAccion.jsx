import "./BotonAccion.css";

export default function BotonAccion({ texto, variante = "turquesa", onClick }) {
  return (
    <button
      className={`boton-accion boton-accion--${variante}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}