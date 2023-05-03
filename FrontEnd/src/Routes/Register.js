import React from "react";
import "../css/Register.css";
import Logo from "../images/logoRed.png";
import { useState } from "react";

import axios from "axios";
import { Navigate, redirect } from "react-router";

function Register() {
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const showPopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("showPopup");
    setTimeout(() => {
      popup.classList.remove("showPopup");
    }, 1500);
  };

  const [statusMessage, setStatusMessage] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    edad: "",
    altura: "",
    peso: "",
    sexo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedOption === "option1") {
      formData.sexo = "H";
    } else {
      formData.sexo = "M";
    }

    if (
      formData.username.length === 0 ||
      formData.password.length === 0 ||
      formData.nombre.length === 0 ||
      formData.apellido1.length === 0 ||
      formData.edad.length === 0 ||
      formData.altura.length === 0 ||
      formData.peso.length === 0 ||
      formData.sexo.length === 0
    ) {
      setStatusMessage("Todos los campos son obligatorios");
      showPopup();
      return;
    }

    if (formData.password !== document.getElementById("repeat-password").value) {
      setStatusMessage("Las contraseñas no coinciden");
      showPopup();
      return;
    }

    const response = await axios.post(
      "http://localhost:7777/api/user",
      formData
    );

    console.log(response.data);

    setStatusMessage(response.data.message);
    showPopup();
    sleep(1500).then(() => {
      window.location.href = "/home";
    });
  };

  return (
    <div className="bg-form">
      <div className="container">
        <div className="popupStatus" id="popup">
          <div style={{ backgroundColor: "white" }}>
            <div className="d-flex">
              <p className="display-5" style={{ color: "black" }}>
                {statusMessage}
              </p>
            </div>
          </div>
        </div>
        <form className="formRegister" method="post">
          <div className="d-flex justify-content-center">
            <div>
              <img
                src={Logo}
                width="180"
                height="180"
                alt="no disponible"
                className="formLogo"
              />
            </div>
            <div>
              <h2 className="display-6 title">Regístrate</h2>
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
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="fs-6">
                Contraseña (*)
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="usernameHelp"
                placeholder="Introduce tu contraseña"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="fs-6">
                Repite la Contraseña (*)
              </label>
              <input
                type="password"
                className="form-control"
                id="repeat-password"
                aria-describedby="usernameHelp"
                placeholder="Repite tu contraseña"
                name="repeatPassword"
                required
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
                  required
                  onChange={handleChange}
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
                  name="apellido1"
                  required
                  onChange={handleChange}
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
                  name="apellido2"
                  onChange={handleChange}
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
                  min={1}
                  aria-describedby="ageHelp"
                  name="edad"
                  required
                  onChange={handleChange}
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
                  min={1}
                  placeholder="Peso en kg"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="fs-6">Sexo (*)</p>

                <div className="sexInputs">
                  <label htmlFor="sex" className="fs-6">
                    Hombre
                  </label>
                  <input
                    type="radio"
                    className=""
                    id="Hombre"
                    aria-describedby="sexHelp"
                    name="sex"
                    value="H"
                    required
                    onChange={(e) => {
                      handleOptionChange(e);
                      setSelectedOption("option1");
                    }}
                  />
                  <label htmlFor="sex" className="fs-6">
                    Mujer
                  </label>
                  <input
                    type="radio"
                    className=""
                    id="Mujer"
                    aria-describedby="sexHelp"
                    name="sex"
                    value="M"
                    required
                    onChange={(e) => {
                      handleOptionChange(e);
                      setSelectedOption("option2");
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="height" className="fs-6">
                  Altura (*)
                </label>
                <input
                  type="number"
                  min={1}
                  className="form-control user-data-input"
                  id="height"
                  aria-describedby="heightHelp"
                  name="altura"
                  placeholder="Altura en cm"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn botonIniciarSesion registerbutton"
            onClick={handleSubmit}
          >
            Registrarme
          </button>

          <div className="gotoRegister">
            <a className="link-register" href="/home">
              Ya tengo una cuenta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
