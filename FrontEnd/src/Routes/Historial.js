import HeaderFF from "./HeaderFF";
import "../css/Historial.css";
import { useEffect } from "react";

export default function Historial() {

  useEffect(() => {
    document.getElementById("historyHeaderLi").classList.add("active");
  },[]);

  return (
    <div className="h-100">
      <HeaderFF />
      <div className="fuerza"></div>
    </div>
  );
}
