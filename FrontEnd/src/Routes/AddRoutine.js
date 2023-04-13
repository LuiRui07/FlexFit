import { useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";

function anyadir_dia(){
  
  const nombreDia = "Dia " ;
  const boton_dia = document.createElement("li");
  boton_dia.classList.add("nombreDia", "flex-grow-1");
  let lista = document.getElementById("listaDias");

  boton_dia.textContent = nombreDia + (lista.childElementCount + 1);
  lista.appendChild(boton_dia)
}

export default function addRoutine() {
  
  
  return (
    <div>
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <input
          type="text"
          placeholder="Workout Name"
          className="w-50 form-control formData"
        />

        <ul id="listaDias">

        </ul>

        <button className="btn btn-outline-primary" onClick={anyadir_dia}>Add Day</button>
        
      </div>
    </div>
  );
}
