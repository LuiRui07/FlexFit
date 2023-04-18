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
      let filtrados = workouts.filter(workout => workout.name.includes(filtro));
      setWorkouts(filtrados);
    });
    
  };


  const goToRoutine = (id) => (e) => {
    e.preventDefault();
    window.location.href = "/rutina/" + id;
  };

  return (
    <div className="backgroudTochoWorkout">
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto workoutsPanel">
        <h1>Rutinas</h1>

        <div className="d-flex pb-3">
          <input className="barra" type="text" placeholder="Buscar" id="filtroNombre"></input>
          <div className="btn" id="search" onClick={filtrarWorkouts}>
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
            <div className="card rutinaClickable" onClick={goToRoutine(workout.id)}>
              { workout.private === true && (
                <h5 className="card-title titleWorkout ">{workout.name}</h5>
              )  
              }
              { workout.private === false && (
                <h5 className="card-title titleWorkout publicWorkout">{workout.name}</h5>
              )  
              }
              
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
          <a className="btn btn-outline-danger mt-4 d-flex" href="addro">
            Añadir Rutina
          </a>
        </div>
      </div>
    </div>
  );
}
