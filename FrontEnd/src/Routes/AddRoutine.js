import { useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";

function anyadir_dia() {
  const nombreDia = "Dia ";
  const boton_dia = document.createElement("li");
  boton_dia.classList.add("nombreDia", "list-group-ite", "d-flex");
  let lista = document.getElementById("listaDias");

  const enlace_dia = document.createElement("a");
  enlace_dia.className = "btn btn-outline-danger ";
  enlace_dia.textContent = nombreDia + (lista.childElementCount + 1);
  enlace_dia.href = "addro/" + (lista.childElementCount + 1);

  const boton_eliminar = document.createElement("button");
  boton_eliminar.className = "btn btn-warning mt-4";
  boton_eliminar.textContent = "Delete";
  boton_eliminar.addEventListener("click", () => eliminar_dia(boton_dia));

  boton_dia.appendChild(enlace_dia);
  boton_dia.appendChild(boton_eliminar);
  lista.appendChild(boton_dia);
}

function eliminar_dia(elemento) {
  let lista = document.getElementById("listaDias");
  lista.removeChild(elemento);
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

        <ul className="align-items-center" id="listaDias"></ul>

        <button className="btn btn-primary" onClick={anyadir_dia}>
          Add Day
        </button>
      </div>
    </div>
  );
}
