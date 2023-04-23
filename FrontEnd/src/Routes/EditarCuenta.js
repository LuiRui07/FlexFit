import HeaderFF from "./HeaderFF";
import React, { useEffect, useState } from "react";
import Logo from "../images/logoRed.png";
import "../css/EditarCuenta.css";

export default function EditarCuenta() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div>
      <HeaderFF />
      <div className="fuerza">
        <form className="formEdit" method="post">
          <div className="d-flex justify-content-center">
            <div>
              <h2 className="editarHead">Editar Perfil </h2>
            </div>
          </div>
          Foto de perfil
          <div
            className="d-flex justify-content-center profile-container foto"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <div className="col-6">
              <img
                src={user.image}
                alt="Foto de perfil"
                className="profile-picture"
                height="250px"
                width="250px"
              />
            </div>
            <div className="col-6 text-end">
              <div>
                <label htmlFor="name" className="fs-6 ">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control   user-data-input"
                  id="nombre"
                  aria-describedby="nameHelp"
                  placeholder="Introduce tu nombre"
                  maxLength={50}
                  name="nombre"
                  value={user.image}
                  required
                  onChange={""}
                />
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-around">
            <div>
              <label htmlFor="username" className="fs-6">
                Usuario (*)
              </label>
              <input
                type="text"
                className="form-control w-20"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Introduce tu usuario"
                maxLength={30}
                name="username"
                value={user.username}
                required
                onChange={""}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around datos">
            <div className="nombreInputs">
              <div>
                <label htmlFor="name" className="fs-6">
                  Nombre (*)
                </label>
                <input
                  type="text"
                  className="form-control   user-data-input"
                  id="nombre"
                  aria-describedby="nameHelp"
                  placeholder="Introduce tu nombre"
                  maxLength={50}
                  name="nombre"
                  value={user.nombre}
                  required
                  onChange={""}
                />
              </div>
              <div>
                <label htmlFor="apellido1" className="fs-6">
                  Apellido 1 (*)
                </label>
                <input
                  type="text"
                  className="form-control user-data-input"
                  id="apellido1"
                  aria-describedby="apellido1Help"
                  placeholder="Introduce tu apellido 1"
                  maxLength={50}
                  value={user.apellido1}
                  name="apellido1"
                  required
                  onChange={""}
                />
              </div>
              <div>
                <label htmlFor="apellido2" className="fs-6">
                  Apellido 2
                </label>
                <input
                  type="text"
                  className="form-control user-data-input"
                  id="apellido2"
                  aria-describedby="apellido2Help"
                  placeholder="Introduce tu apellido 2"
                  maxLength={50}
                  value={user.apellido2}
                  name="apellido2"
                  onChange={""}
                />
              </div>
            </div>

            <div className="dataInputs">
              <div>
                <label htmlFor="age" className="fs-6">
                  Edad (*)
                </label>
                <input
                  type="number"
                  className="form-control user-data-input"
                  id="age"
                  aria-describedby="ageHelp"
                  name="edad"
                  required
                  value={user.edad}
                  onChange={""}
                />
              </div>
              <div>
                <label htmlFor="weight" className="fs-6">
                  Peso (*)
                </label>
                <input
                  type="number"
                  className="form-control user-data-input"
                  id="weight"
                  aria-describedby="weightHelp"
                  name="peso"
                  value={user.peso}
                  required
                  onChange={""}
                />
              </div>

              <div>
                <label htmlFor="height" className="fs-6">
                  Altura
                </label>
                <input
                  type="number"
                  className="form-control user-data-input"
                  id="height"
                  aria-describedby="heightHelp"
                  name="altura"
                  value={user.altura}
                  required
                  onChange={""}
                />
              </div>
            </div>
          </div>
          <div className="botones">
            <a className="btn btn-outline-danger">Guardar Cambios</a>
            <a className="btn btn-outline-dark"> Cambiar Contraseña</a>
          </div>
        </form>
      </div>
    </div>
  );
}
