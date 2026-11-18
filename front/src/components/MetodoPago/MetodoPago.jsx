import "./MetodoPago.css";

export default function MetodoPago({ opciones, seleccionado, onCambiar }) {
  return (
    <div className="metodo-pago">
      <h3 className="metodo-pago__titulo">Método de pago:</h3>
      {opciones.map((opcion) => (
        <label key={opcion} className="metodo-pago__opcion">
          <input
            type="radio"
            name="metodoPago"
            value={opcion}
            checked={seleccionado === opcion}
            onChange={() => onCambiar(opcion)}
          />
          {opcion}
        </label>
      ))}
    </div>
  );
}