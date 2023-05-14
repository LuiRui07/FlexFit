import { useState, useEffect } from "react";

import HeaderFF from "./HeaderFF.js";
import AddExercise from "./AddExercise.js";
import axios from "axios";
import "../css/AddExercise_Day.css";

const AddExercise_Day = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [diaActual, setDiaActual] = useState(null);
  const [rutinaActual, setRutinaActual] = useState(null);
  const [ejerciciosDia, setEjerciciosDia] = useState([]);

  const [loaded, setLoaded] = useState(false);

  function eliminar_dia(elemento, idEjercicio) {
    console.log("Eliminando dia con id: " + idEjercicio);
    axios
      .delete("http://localhost:7777/api/exerciseDay/" + idEjercicio, {
        idExercise: idEjercicio,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "ExerciseDay deleted successfully") {
          ejerciciosDia.pop();
          if (ejerciciosDia === undefined) {
            setEjerciciosDia([]);
          } else {
            setEjerciciosDia(ejerciciosDia);
          }
          let lista = document.getElementById("listaEjercicios");
          lista.removeChild(elemento);
        }
      });
  }

  const getExercises = async () => {
    const response = await fetch("http://localhost:7777/api/exercise/");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const [todosLosEjs, setTodosLosEjs] = useState([]);

  const crearBotonEjercicios = (ejercicio) => {
    let TipoEjercicio = todosLosEjs.find(
      (ej) => ej.id === ejercicio.exerciseId
    );

    console.log(TipoEjercicio);

    const liEjercicio = document.createElement("li");
    liEjercicio.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const ejercicio_container = document.createElement("div");
    ejercicio_container.className =
      "alert alert-secondary d-flex botonDiaLista ejerContainer";

    const imagen_container = document.createElement("div");
    imagen_container.className = "imagenEjercicioContainer";

    const imagen = document.createElement("img");
    imagen.className = "imagenEjercicio";
    imagen.src = TipoEjercicio.image;
    imagen.height = "50";
    imagen.style.borderRadius = "10px";
    imagen.width = "50";
    imagen.alt = "No disponible";

    imagen_container.style.width = "150px";
    imagen_container.style.height = "150px";

    imagen_container.appendChild(imagen);


    const container_info = document.createElement("div");
    container_info.className = "containerInfoEjercicio alert alert-secondary";

    const ejer_name = document.createElement("h4");
    ejer_name.className = "diaName";
    ejer_name.textContent = TipoEjercicio.name;

    const ejer_reps = document.createElement("span");
    ejer_reps.className = "diaReps";
    ejer_reps.textContent = "Repeticiones: " + ejercicio.reps;

    const ejer_sets = document.createElement("span");
    ejer_sets.className = "diaSets";
    ejer_sets.textContent = "Series: " + ejercicio.series;

    const ejer_peso = document.createElement("span");
    ejer_peso.className = "diaPeso";
    ejer_peso.textContent = "Peso: " + ejercicio.weight + " kg";

    const containerforInfo = document.createElement("div");
    containerforInfo.className = "containerforInfo";

    containerforInfo.appendChild(ejer_name);
    containerforInfo.appendChild(ejer_reps);
    containerforInfo.appendChild(ejer_sets);
    containerforInfo.appendChild(ejer_peso);

    
    container_info.appendChild(imagen_container);
    
    container_info.appendChild(containerforInfo);

    liEjercicio.appendChild(container_info);

    if (rutinaActual.user_id === user.id) {
      const boton_eliminar = document.createElement("button");
      boton_eliminar.className = "btn btn-danger clickDeleteDia";
      boton_eliminar.textContent = "Borrar";
      boton_eliminar.addEventListener("click", () =>
        eliminar_dia(liEjercicio, ejercicio.idExercise)
      );

      liEjercicio.appendChild(boton_eliminar);
    }

    return liEjercicio;
  };

  const getWorkout = async () => {
    const idRoutine = window.location.pathname.split("/")[2];
    const response = await axios.get(
      "http://localhost:7777/api/workout/" + idRoutine
    );
    console.log(response.data.data);
    return response.data.data;
  };

  const getDia = async () => {
    const idDia = window.location.pathname.split("/")[4];
    const response = await axios.get("http://localhost:7777/api/day/" + idDia);
    console.log(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getWorkout().then((workout) => {
      setRutinaActual(workout);

      getDia().then((day) => {
        setDiaActual(day);
        console.log(day.dayexercises);
        setEjerciciosDia(day.dayexercises);

        getExercises().then((ejercicios) => {
          setTodosLosEjs(ejercicios.data);
          setLoaded(true);
        });
      });
    });
  }, []);

  useEffect(() => {
    console.log(ejerciciosDia);

    if (ejerciciosDia !== null) {
      let lista = document.getElementById("listaEjercicios");
      ejerciciosDia.forEach((ejercicio) => {
        let boton = crearBotonEjercicios(ejercicio);
        lista.appendChild(boton);
      });
    }
  }, [loaded]);

  const mostrarVentana = () => {
    const ventana = document.getElementById("ventana_anyadir");
    ventana.classList.add("ventanaActiva");
  };

  return (
    <div>
      {!loaded && (
        <div
          className="spinner-border text-primary center container"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {loaded && <HeaderFF />}

      {loaded && <AddExercise />}

      {loaded && (
        <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <ul className="breadcrumb">
            <li><a href="/">FlexFit</a></li>
            <li>/</li>
            <li><a href="/workouts">Mis Rutinas</a></li>
            <li>/</li>
            <li><a href={'/rutina/' + rutinaActual.id}>{rutinaActual.name}</a></li>
            <li>/</li>
            <li>{diaActual.name}</li>
            <li>/</li>
            <li className="breadcrumbActive">Ejercicios</li>
          </ul>
          <h1 style={{ color: "#fb465a" }}>{rutinaActual.name}</h1>
          <h3>
            Dia: <label style={{ color: "#fb465a" }}>{diaActual.name}</label>
          </h3>

          {rutinaActual !== null && (
            <div className="mt-5 card container p-4 align-items-center overflow-auto">
              <ul
                className="align-items-center listaScroleableEjs"
                id="listaEjercicios"
                style={{
                  overflowY: "scroll",
                  padding: "30px",
                  maxHeight: "400px",
                  marginBottom: "30px",
                }}
              ></ul>
              {ejerciciosDia.length === 0 && (
                <div className="alert alert-danger" role="alert">
                  Este dia aún no tiene ejercicios añadidos
                </div>
              )}
            </div>
          )}

          {rutinaActual.user_id === user.id && (
            <button
              className="btn btn-danger clickAddEjercicio"
              onClick={mostrarVentana}
            >
              Añadir Ejercicio
            </button>
          )}

          <div className="mt-2">
            <button
              className="btn btn-danger clickAddDia"
              onClick={() =>
                (window.location.href = "/rutina/" + rutinaActual.id)
              }
            >
              Volver a la rutina
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExercise_Day;
