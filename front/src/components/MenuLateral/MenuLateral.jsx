import { NavLink } from "react-router-dom";

import { FaBoxOpen, FaShoppingCart, FaBook, FaUsers, FaUser } from "react-icons/fa";
import "./MenuLateral.css";

const opciones = [
  { texto: "PRODUCTOS", ruta: "/productos", icono: FaBoxOpen },
  { texto: "VENTAS", ruta: "/ventas", icono: FaShoppingCart },
  { texto: "REPORTES", ruta: "/reportes", icono: FaBook },
  { texto: "USUARIOS", ruta: "/usuarios", icono: FaUsers },
];

export default function MenuLateral({ usuario }) {
  return (
    <aside className="menu-lateral">
     <h2 className="menu-lateral__titulo">PAPELERÍA JAYA</h2>
      {opciones.map((opcion) => {
        const Icono = opcion.icono;
        return (
          <NavLink
            key={opcion.ruta}
            to={opcion.ruta}
            className={({ isActive }) =>
              isActive
                ? "menu-lateral__item menu-lateral__item--activo"
                : "menu-lateral__item"
            }
          >
            <Icono /> {opcion.texto}
          </NavLink>
        );
      })}

      <button className="menu-lateral__cerrar">CERRAR SESIÓN</button>

      <div className="menu-lateral__usuario">
        <FaUser /> {usuario}
      </div>
    </aside>
  );
}