import "./DatoResumen.css";

export default function DatoResumen({ etiqueta, valor }) {
  return (
    <p className="dato-resumen">
      <strong>{etiqueta}:</strong> {valor}
    </p>
  );
}