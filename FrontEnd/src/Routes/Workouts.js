import { useState, useEffect } from "react";
import "../css/Workouts.css";
import HeaderFF from "./HeaderFF.js";
import axios from "axios";

export default function AllWorkouts() {
  const getWorkouts = async () => {
    const response = await axios.get(
      "http://localhost:7777/api/workout/userAndPublic/" + user.id
    );
    return response.data.data;
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [workouts, setWorkouts] = useState([]);
  const [filtro, setFiltro] = useState("");

  if (user === null) {
    window.location.href = "/home";
  }

  useEffect(() => {
    document.getElementById("workoutsHeaderLi").classList.add("active");
    getWorkouts().then((workouts) => {
      setWorkouts(workouts);
    });
  }, []);

  const filtrarWorkouts = (e) => {
    e.preventDefault();

    setFiltro(document.getElementById("filtroNombre").value);

    getWorkouts().then((workouts) => {
      let filtrados = workouts.filter((workout) =>
        workout.name.includes(filtro)
      );
      setWorkouts(filtrados);
    });
  };

  const goToRoutine = (id) => (e) => {
    e.preventDefault();
    window.location.href = "/rutina/" + id;
  };

 

  const [showModal, setShowModal] = useState(false);

 

  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Evita que el evento se propague al card
    setShowModal(true);
  };

  const handleModalClose = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };


  function borrarRutina(workout,event) {
    event.stopPropagation();
    console.log("Eliminando rutina con id: " + workout.id);
    setShowModal(false);
    axios
      .delete("http://localhost:7777/api/workout/" + workout.id, { id: workout.id })
      .then((response) => {
        console.log(response.data);
        alert("Borrado");
        setShowModal(false);
        window.location.href = "/workouts";
      });
  }

  document.title="Rutinas";
  return (
    <div className="backgroudTochoWorkout">
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto workoutsPanel">
        <ul className="breadcrumb">
          <li><a href="/">FlexFit</a></li>
          <li>/</li>
          <li className="breadcrumbActive">Mis Rutinas</li>
        </ul>

        <h1>Rutinas</h1>

        <div className="d-flex pb-3">
          <input
            className="barra"
            type="text"
            placeholder="Buscar"
            id="filtroNombre"
          ></input>
          <div className="btn" id="search" onClick={filtrarWorkouts} tabIndex={0}>
            <i className="fa fa-search"></i>
          </div>
        </div>

        {workouts.length === 0 && (
          <div className="card noRutinas">
            <div className="card-body">
              <h5 className="card-title ">No hay rutinas</h5>
            </div>
          </div>
        )}

        <div className="cardTag" id="cardsSport">
          {workouts.map((workout) => (
            <div
              className="card rutinaClickable"
              tabIndex={0}
              onClick={goToRoutine(workout.id)}
            >
              {workout.private === true && (
                <div className="card-title titleWorkout">
                  <div className="borrarRutina" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5>{workout.name}</h5>
                    <div>
                      <button type="button" name="preAlert" className="btn btn-danger custom-cursor-on-hover" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleDeleteClick} onMouseDown={(event) => event.stopPropagation()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill custom-cursor-on-hover" viewBox="0 0 16 16">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" className="custom-cursor-on-hover"></path>
                        </svg>
                      </button>
                      {showModal === true && (
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar rutina</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ¿Estás seguro? Esta accion no sera reversible.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Cancelar</button>
                              <button type="button" onClick={(event) => borrarRutina(event)} class="btn btn-danger" >Confirmar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>


              )}
              {workout.private === false && (
                <h5 className="card-title titleWorkout publicWorkout">
                  {workout.name}
                </h5>
              )}


              <div className="card-body">
                <p className="card-text">
                  Descripción: <strong>{workout.description}</strong>
                </p>
                <p className="card-text ">
                  Dias: <strong>{workout.workout_days.length}</strong>
                </p>
                <p className="card-text ">
                  Dificultad: <strong>{workout.difficulty}</strong>
                </p>
              </div>

            </div>
          ))}
        </div>

        <div>
          <a className="btn btn-danger mt-4 d-flex" href="addro">
            Añadir Rutina
          </a>
        </div>
      </div>
    </div>
  );
}
