import Logo from "../images/logo.png";
import "../css/Header.css";

const cerrarSesion = () => {
  localStorage.removeItem("user");
  window.location.href = "../home";
};

export default function HeaderFF() {
  return (
    <div className="d-flex w-100">
      <ul className="nav nav-tabs align-items-center w-100 headerTabs">
        <li className="nav-item">
          <img src={Logo} width="50" height="50" alt="no disponible" />
        </li>
        <li className="nav-item-col" id="homeHeaderLi">
          <a className="nav-link" href="../home">
            Home
          </a>
        </li>
        <li className="nav-item-col" id="workoutsHeaderLi">
          <a className="nav-link" href="../workouts">
            Rutinas
          </a>
        </li>

        <li className="nav-item-col" id="tipsHeaderLi">
          <a className="nav-link" href="../Tips">
            Tips
          </a>
        </li>

        <li className="nav-item-col" id="cuentaHeaderLi">
          <a className="nav-link" href="../cuenta">
            Cuenta
          </a>
        </li>
      </ul>
    </div>
  );
}
