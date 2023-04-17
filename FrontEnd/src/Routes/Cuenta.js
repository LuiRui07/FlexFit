import HeaderFF from "./HeaderFF";
import "../css/Cuenta.css";
import React, { useEffect, useState } from "react";
import Espalda from "../images/Espalda.png";

export default function Historial() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    document.getElementById("cuentaHeaderLi").classList.add("active");
  }, []);

  return (
    <div className="h-100">
      <HeaderFF />

      <div className="fuerza2">
        <div className="d-flex justify-content-center">
          
          <div className="col-4 ">
            <div className="card">
              <div className="text-black d-flex aling-items-center row-4 pl-5">
                <div class="">
                  <img src={Espalda} alt="no hay" class="img"></img>
                </div>
                <div class="p-5">
                  <h1 className="card-title ">
                    {user.nombre} {user.apellido1} {user.apellido2}
                  </h1>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card container p-4 justify-content-center align-items-center overflow-auto card-body text-dark ">
                <h3><strong>Sexo:</strong> {user.sexo == "H" ? "Hombre" : "Mujer"} </h3>
                <h3><strong>Peso: </strong>{user.peso} kg </h3>
                <h3><strong>Altura: </strong>{user.altura} cm</h3>
                <h3><strong>Edad: </strong>{user.edad} años </h3>

              </div>
            </div>
            <div>
              <a href="#" className="btn btn-danger btn-lg d-grid gap-2">
                Editar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
