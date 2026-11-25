import { useNavigate } from "react-router-dom";
import PanelMarca from "../../components/PanelMarca";
import FormularioLogin from "../../components/FormularioLogin";
import logo from "../../assets/logo-jaya.png";
import "./Login.css";

const MODULOS = ["Ventas", "Inventario", "Reportes", "Usuarios"];

// Datos solo para pruebas. Se reemplazan por el inicio de sesión del backend.
const USUARIO_PRUEBA = { telefono: "9991234567", contrasena: "Prueba#2026" };

export default function Login() {
    
    const navigate = useNavigate();

    const ingresar = (datos) => {
        if (
            datos.telefono !== USUARIO_PRUEBA.telefono ||
            datos.contrasena !== USUARIO_PRUEBA.contrasena
        ) {
            return "Teléfono o contraseña incorrectos.";
        }
        navigate("/productos");
    };

  return (
    <div className="login">
      <div className="login__tarjeta">
        <PanelMarca
          logo={logo}
          titulo="SISTEMA DE PUNTO DE VENTA"
          modulos={MODULOS}
        />
        <section className="login__formulario">
          <h1 className="login__titulo">Iniciar sesión</h1>
          <p className="login__subtitulo">
            Ingresa tu teléfono y contraseña para continuar
          </p>
          <FormularioLogin onIngresar={ingresar} />
          <p className="login__ayuda">
            ¿Problemas para entrar? <strong>Contacta al administrador</strong>
          </p>
        </section>
      </div>
    </div>
  );
}