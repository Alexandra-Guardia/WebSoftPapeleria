import "./Modal.css";

export default function Modal({ titulo, onCerrar, children }) {
  return (
    <div className="modal__fondo" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__titulo">{titulo}</h2>
        {children}
      </div>
    </div>
  );
}
