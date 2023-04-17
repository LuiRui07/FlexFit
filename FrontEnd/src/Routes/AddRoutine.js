import { useEffect, useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";





export default function AddRoutine() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

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

    setDiasRutina([...diasRutina, "dia"]);
  }
  
  function eliminar_dia(elemento) {
    let lista = document.getElementById("listaDias");
    lista.removeChild(elemento);
  }


  const obtenerDiasRutina = () => {
    return []
  };
    
  const [nombreRutina, setNombreRutina] = useState("");
  const [rutinaFavorita, setRutinaFavorita] = useState(false);

  const [diasRutina, setDiasRutina] = useState(obtenerDiasRutina);

  const favourite = () => {
    let corazon = document.getElementById("corazon");
    if(corazon.classList.contains("fa-heart-o")){
      corazon.classList.remove("fa-heart-o");
      corazon.classList.add("fa-heart");
      setRutinaFavorita(true);
    }else{
      corazon.classList.remove("fa-heart");
      corazon.classList.add("fa-heart-o");
      setRutinaFavorita(false);
    }
  }

  return (
    <div>
      <HeaderFF />

      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        
        <form>
          <div className="form-group d-flex justify-content-center">
            <input type="text" className="form-control nombreRutina" id="nombreRutina" placeholder="Nombre de la rutina"/>
            <span className="corazonaco"><i class="fa fa-heart" aria-hidden="true" id="corazon" onClick={favourite}></i> </span>
          </div> 
        </form>

        <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">

          <ul className="align-items-center" id="listaDias"></ul>
          {
           diasRutina.length === 0 &&
          (
            <div className="alert alert-danger" role="alert">
              Debe añadir al menos un dia
            </div>
          )
          }
          <button className="btn btn-danger clickAddDia" onClick={anyadir_dia}>
            Añadir dia
          </button>
        </div>
      </div>
    </div>
  );
}
