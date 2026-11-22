import "./CampoImporte.css";

function CampoImporte({ etiqueta, valor, onCambio }) {
  return (
    <label className="campo-importe">
      {etiqueta}: $
      <input
        type="number"
        min="0"
        step="0.01"
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
      />
    </label>
  );
}

export default CampoImporte;