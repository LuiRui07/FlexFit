import HeaderFF from "./HeaderFF";
import "../css/Cuenta.css";
import React, { useEffect, useState } from "react";

const cerrarSesion = () => {
  if (window.confirm("¿Estás seguro de que quieres cerrar la sesión?")) {
    localStorage.removeItem("user");
    window.location.href = "../home";
  }
};

export default function Historial() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    document.getElementById("cuentaHeaderLi").classList.add("active");
  }, []);

  return (
    <div className="h-100">
      <HeaderFF />

      <div className="fuerza2">
        <div className="containerInfoUser">
          <div className="headerContainerInfoUser">
            <img
              src={user.image}
              alt="no hay"
              className="imagenUser"
              height={150}
              width={150}
            ></img>
            <div className="nameInfoContainer">
              <h1>
                {user.nombre} {user.apellido1} {user.apellido2}
              </h1>
            </div>
          </div>
          <div className="dataContainerInfoUser">
            <div className="dataRows">
              <h3>
                <strong>Sexo:</strong> {user.sexo === "H" ? "Hombre" : "Mujer"}{" "}
              </h3>
              <h3>
                <strong>Peso: </strong>
                {user.peso} kg{" "}
              </h3>
              <h3>
                <strong>Altura: </strong>
                {user.altura} cm
              </h3>
              <h3>
                <strong>Edad: </strong>
                {user.edad} años{" "}
              </h3>
            </div>
          </div>
          <div className="containerBotonEditar">
            <a href="/editarperfil" className="botonEditar">
              Editar
            </a>
          </div>
          <div className="containerBotonBorrar">
            <a className="botonBorrar" onClick={cerrarSesion}>
              Cerrar Sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
