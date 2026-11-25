import "./PanelMarca.css";

export default function PanelMarca({ logo, titulo, modulos }) {
  return (
    <section className="panel-marca">
      <div className="panel-marca__logo">
        <img src={logo} alt="JAYA Papelería" />
      </div>
      <h2 className="panel-marca__titulo">{titulo}</h2>
      <p className="panel-marca__modulos">{modulos.join(" · ")}</p>
    </section>
  );
}