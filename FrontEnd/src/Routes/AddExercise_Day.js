import { useParams } from "react-router-dom";
import HeaderFF from "./HeaderFF.js";
import AddExercise from "./AddExercise.js"
import axios from "axios";

const URL_DIA = "http://localhost:7777/api/day"

function anyadir_ejer() {

    const ventana = document.getElementById("ventana_anyadir")
    ventana.classList.add("ventanaActiva")

    const nombreEjer = "Ejer ";
    const boton_ejer = document.createElement("li");
    boton_ejer.classList.add("nombreEjer", "list-group-item");
    let lista = document.getElementById("listaEjers");
  
    const enlace_ejer = document.createElement("a");
    enlace_ejer.className = "btn btn-outline-danger mt-4 me-2 ";
    enlace_ejer.textContent = nombreEjer + (lista.childElementCount + 1);
    enlace_ejer.href = "addro/" + (lista.childElementCount + 1);                     //Paso el nombre del dia dinamico
  
    const boton_eliminar = document.createElement("button");
    boton_eliminar.className = "btn btn-warning mt-4";
    boton_eliminar.textContent = "Delete";
    boton_eliminar.addEventListener("click", () => eliminar_dia(boton_ejer));
  
    boton_ejer.appendChild(enlace_ejer);
    boton_ejer.appendChild(boton_eliminar);
    lista.appendChild(boton_ejer);
  }
  
  function eliminar_dia(elemento) {
    let lista = document.getElementById("listaEjers");
    lista.removeChild(elemento);
  }

const AddExercise_Day = () => {
    let params = useParams();
    let dias = axios.get(URL_DIA);
    console.log(dias)

    return (

        <div>
            <HeaderFF />
            <div class="addExercise" id="ventana_anyadir">
                <AddExercise/>
            </div>
            <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">


                <ul className="align-items-center" id="listaEjers"></ul>

                <button className="btn btn-primary" onClick={anyadir_ejer}>
                    Añadir Ejercicio
                </button>
            </div>
        </div>

    );
}

export default AddExercise_Day;