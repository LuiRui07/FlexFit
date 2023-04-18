import { useState, useEffect } from "react";

import HeaderFF from "./HeaderFF.js";
import AddExercise from "./AddExercise.js"
import axios from "axios";
import "../css/AddExercise_Day.css";





const AddExercise_Day = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const [IdDia, setIdDia] = useState(window.location.pathname.split("/")[4]);
    const [rutinaActual, setRutinaActual] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const getWorkout = async () => {
        const idRoutine = window.location.pathname.split("/")[2];
        const response = await axios.get(
          "http://localhost:7777/api/workout/" + idRoutine
        );
        console.log(response.data.data);
        return response.data.data;
      };


    useEffect(() => {
        getWorkout().then((workout) => {
          setRutinaActual(workout);
          setLoaded(true);
        });
    
      }, []);

    function anyadir_ejer() {

        const nombreEjer = "Ejer ";
        const boton_ejer = document.createElement("li");
        boton_ejer.classList.add("nombreEjer", "list-group-item","d-flex");
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

    const mostrarVentana = () => {
        const ventana = document.getElementById("ventana_anyadir")
        ventana.classList.add("ventanaActiva")
    }

    const cerrarVentana = () => {
        const ventana = document.getElementById("ventana_anyadir")
        ventana.classList.remove("ventanaActiva")
    }


    return (
        <div>
            {
            !loaded && (
                <div className="spinner-border text-primary center container" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
            }
            
            {loaded && (
                <HeaderFF />

            )}

            {loaded && (
                <AddExercise/>
            )}
            

            {loaded && (

                <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
                    <h1>{rutinaActual.name}</h1>
                    <h4>Dia: {IdDia}</h4>
                    
                    <ul className="align-items-center" id="listaEjers"></ul>
                    <button className="btn btn-danger clickAddDia" onClick={mostrarVentana}>
                        Añadir Ejercicio
                    </button>
                    <div className="mt-2">
                    <button className="btn btn-danger clickAddDia" >Volver a la rutina</button> 
                    </div>
                </div>

            )}

        </div>

    );
}

export default AddExercise_Day;