import "./CampoLogin.css";

export default function CampoLogin({
  icono,
  nombre,
  tipo = "text",
  valor,
  placeholder,
  prefijo,
  maxLength,
  autoComplete,
  onCambio,
}) {
  const Icono = icono;

  return (
    <label className="campo-login">
      <Icono className="campo-login__icono" />
      <input
        className="campo-login__input"
        name={nombre}
        type={tipo}
        placeholder={placeholder}
        aria-label={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        value={valor}
        onChange={onCambio}
      />
      {prefijo && <span className="campo-login__prefijo">{prefijo}</span>}
    </label>
  );
}