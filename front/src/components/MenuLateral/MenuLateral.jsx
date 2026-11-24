import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBoxOpen, FaShoppingCart, FaFileInvoiceDollar, FaBook, FaUsers, FaUser, FaSignOutAlt } from "react-icons/fa";
import "./MenuLateral.css";

const opciones = [
  { texto: "PRODUCTOS", ruta: "/productos", icono: FaBoxOpen },
  { texto: "VENTAS", ruta: "/ventas", icono: FaShoppingCart },
  { texto: "REPORTES", ruta: "/reportes", icono: FaBook },
  { texto: "USUARIOS", ruta: "/usuarios", icono: FaUsers },
  { texto: "ENTRADAS Y GASTOS", ruta: "/entradas-gastos", icono: FaFileInvoiceDollar },
];

export default function MenuLateral({ usuario }) {
  const [menuUsuarioAbierto, setMenuUsuarioAbierto] = useState(false);
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

      <div className="menu-lateral__usuario-contenedor">
        {menuUsuarioAbierto && (
          <button type="button" className="menu-lateral__cerrar">
            <FaSignOutAlt /> CERRAR SESIÓN
          </button>
        )}
        <button
          type="button"
          className="menu-lateral__usuario"
          aria-expanded={menuUsuarioAbierto}
          onClick={() => setMenuUsuarioAbierto(!menuUsuarioAbierto)}
        >
          <FaUser /> {usuario}
        </button>
      </div>
    </aside>
  );
}