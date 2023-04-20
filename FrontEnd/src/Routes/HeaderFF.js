import Logo from "../images/logo.png";
import "../css/Header.css";
import React, { useEffect, useState } from "react";

export default function HeaderFF() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div className="d-flex w-100">
      <ul className="nav nav-tabs align-items-center w-100 headerTabs">
        <li className="nav-item">
          <img src={Logo} width="50" height="50" alt="no disponible" />
        </li>
        <li className="nav-item-col" id="homeHeaderLi">
          <a className="nav-link" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item-col" id="workoutsHeaderLi">
          <a className="nav-link" href="../workouts">
            Rutinas
          </a>
        </li>
        <li className="nav-item-col" id="AboutUsHeaderLi">
          <a className="nav-link" href="../aboutus">
            Sobre Nosotros
          </a>
        </li>
        <li className="nav-item-col ml-auto" id="cuentaHeaderLi">
          <a className="nav-link" href="../cuenta">
            <img src={user.image} className="imgPerfil"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
