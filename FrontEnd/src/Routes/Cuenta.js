import HeaderFF from "./HeaderFF";
import "../css/Cuenta.css";
import { useEffect } from "react";

export default function Historial() {

  useEffect(() => {
    document.getElementById("cuentaHeaderLi").classList.add("active");
  },[]);
  
  return (
    <div className="h-100">
      <HeaderFF />
      <div className="fuerza2"></div>
    </div>
  );
}
