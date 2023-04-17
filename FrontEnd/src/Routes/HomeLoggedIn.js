import foto1 from "../images/pt.png";
import foto2 from "../images/avanzado.png";
import foto3 from "../images/historial.png";
import React, { useEffect, useState } from "react";
import HeaderFF from "./HeaderFF";
import "../css/HomeLoggedIn.css";

function HomeLoggedIn() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    document.getElementById("homeHeaderLi").classList.add("active");
    const bootstrapCss = document.createElement("link");
    const bootstrapJs = document.createElement("script");

    bootstrapCss.href =
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css";
    bootstrapCss.rel = "stylesheet";
    bootstrapCss.type = "text/css";

    bootstrapJs.src =
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.bundle.min.js";
    bootstrapJs.type = "text/javascript";
    bootstrapJs.async = true;

    document.head.appendChild(bootstrapCss);
    document.body.appendChild(bootstrapJs);
  }, []);

  return (
    <div>
      <HeaderFF />

      <div className="fuerte">
        <div className="p-4 ">
          <h1>
            Hola {user.username}
            <br />
            Ready to do exercise?
          </h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="col-4">
            <div className="card">
              <div className="card-body text-dark">
                <h5 className="card-title">Principiantes</h5>
                <img
                  src={foto1}
                  class="rounded img-fluid"
                  alt="image not found"
                />
                <p className="card-text pt-3" style={{ fontSize: "19px" }}>
                  Para usuarios sin experiencia previa, tenemos un catálogo de
                  rutinas prediseñadas.
                </p>
                <a href="/Workouts" className="btn btn-danger ">
                  Catálogo
                </a>
                <a href="/Tips" className="btn btn-danger ">
                  Consejos
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body text-dark">
                <h5 className="card-title">Avanzado</h5>
                <img
                  src={foto2}
                  class="rounded img-fluid"
                  alt="image not found"
                />
                <p className="card-text pt-3" style={{ fontSize: "19px" }}>
                  Diseñe su propia rutina, para usuarios con más experiencia.
                </p>
                <a href="/Workouts" className="btn btn-danger">
                  Diseñar rutina
                </a>
              </div>
            </div>
          </div>
          {/*<div className="col-4">
            <div className="card h-100">
              <div className="card-body text-dark">
                <h5 className="card-title">Historial</h5>
                <img src={foto3} class="img-fluid" alt="image not found"/>
                <p className="card-text pt-3 pb-4" style={{ fontSize: '19px' }}>Consulte antiguas rutinas realizadas.</p>
                <a href="/Historial" className="btn btn-primary">Historial</a>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default HomeLoggedIn;
