import EncabezadoPagina from "../../components/EncabezadoPagina";
import BotonAccion from "../../components/BotonAccion";
import TablaUsuarios from "../../components/TablaUsuarios";

const usuariosEjemplo = [
  {
    id: 1,
    nombre: "Admin",
    usuario: "",
    correo: "admin@correo.com",
    rol: "Administrador",
    privilegio: "Todos",
  },
  {
    id: 2,
    nombre: "Empleado",
    usuario: "",
    correo: "empleado1@correo.com",
    rol: "Empleado",
    privilegio: "Ventas, Productos",
  },
];

export default function GestionUsuarios() {
  return (
    <>
      <EncabezadoPagina titulo="Usuarios" />
      <BotonAccion texto="Agregar usuario" variante="turquesa" />
      <TablaUsuarios usuarios={usuariosEjemplo} />
    </>
  );
}