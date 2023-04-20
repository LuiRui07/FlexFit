import React from "react";
import "../css/Login.css";
import Logo from "../images/logoRed.png";
import { useState } from "react";

import axios from "axios";

function Login() {
  const [statusMessage, setStatusMessage] = useState("");

  const showPopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("showPopup");
    setTimeout(() => {
      popup.classList.remove("showPopup");
    }, 1000);
  };

  const iniciarSesion = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);

    axios
      .get("http://localhost:7777/api/user/" + username + "/" + password)
      .then((res) => {
        if (res.data.message === "Invalid username or password") {
          setStatusMessage("Usuario o contraseña incorrectos");
          showPopup();
        } else {
          var user = JSON.stringify(res.data.data);

          localStorage.setItem("user", user);
          window.location.href = "/home";
        }
      })
      .catch((err) => {
        setStatusMessage("Usuario o contraseña incorrectos");
        showPopup();
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
        <form className="formLogin">
          <div className="form-group d-flex align-items-center">
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
              <h2 className="display-6 title">Inicia Sesión</h2>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="display-6">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernameHelp"
              placeholder="Introduce tu usuario"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="display-6">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          <button
            type="submit"
            className="botonIniciarSesion"
            onClick={iniciarSesion}
          >
            Entrar
          </button>

          <div className="gotoRegister">
            <a
              className="btn btn-outline-secondary link-register"
              href="/register"
            >
              No tengo una cuenta
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
