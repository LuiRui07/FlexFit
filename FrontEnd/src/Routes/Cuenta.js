import HeaderFF from "./HeaderFF";
import "../css/Cuenta.css";
import React, { useEffect, useState } from "react";

export default function Historial() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    document.getElementById("cuentaHeaderLi").classList.add("active");
  }, []);

  return (
    <div className="h-100">
      <HeaderFF />
      <div className="fuerza2">
        <div className="d-flex justify-content-left">
          <div className="col-4">
            <div className="card">
              <div className="card-body text-dark ">
                <h1 className="card-title">
                  {user.nombre} {user.apellido1} {user.apellido2}
                </h1>
                <h3> {user.sexo == "H" ? "Hombre" : "Mujer"} </h3>
                <h3>{user.peso} kg </h3>
                <h3>{user.altura} cm</h3>
                <h3>{user.edad} años </h3>
                <a href="#" className="btn btn-danger">
                  Editar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
