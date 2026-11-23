import { useState } from "react";
import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaUsuarios from "../../components/TablaUsuarios";
import Modal from "../../components/Modal";
import FormularioUsuario from "../../components/FormularioUsuario";

const usuariosEjemplo = [
  {
    id: 1,
    nombre: "Admin",
    usuario: "admin",
    correo: "admin@correo.com",
    rol: "Administrador",
    privilegio: "Todos",
  },
  {
    id: 2,
    nombre: "Vendedor",
    usuario: "vendedor1",
    correo: "vendedor1@correo.com",
    rol: "Vendedor",
    privilegio: "Ventas, Productos",
  },
];

export default function GestionUsuarios() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <EncabezadoPagina titulo="Usuarios" />
      <BotonAccion
        texto="Agregar usuario"
        variante="turquesa"
        onClick={() => setModalAbierto(true)} />
      <TablaUsuarios usuarios={usuariosEjemplo} />
      {modalAbierto && (
        <Modal titulo="Agregar usuario" onCerrar={() => setModalAbierto(false)}>
          <FormularioUsuario
            onGuardar={() => setModalAbierto(false)}
            onCancelar={() => setModalAbierto(false)}
          />
        </Modal>
      )}
    </>
  );
}