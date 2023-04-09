import { useState } from "react";
import "../css/Workouts.css";
import HeaderFF from "./HeaderFF.js";

export default function AllWorkouts() {
  const WorkoutDB = [
    {
      name: "Rutina 1",
      desc: "Frecuencia 1",
      sets: 20,
      time: "1h30min",
    },
    {
      name: "Rutina 2",
      desc: "Frecuencia 2",
      sets: 15,
      time: "1h",
    },
    {
      name: "Rutina 3",
      desc: "FullBody",
      sets: 15,
      time: "30 min",
    },
  ];

  const [workouts, setWorkouts] = useState(WorkoutDB);

  return (
    <div>
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto ">
        <h1>Workouts</h1>

        <div className="d-flex pb-3">
          <input className="barra" type="text" placeholder="Buscar"></input>
          <div className="btn" id="search">
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div className="d-flex gap-5 cardTag" id="cardsSport">
          {workouts.map((workout) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">Description: {workout.desc}</p>
                <p className="card-text">Sets: {workout.sets}</p>
                <p className="card-text">Time: {workout.time}</p>
              </div>
            </div>
          ))}
        </div>
        <li className="list-group-item" id="add">
          <a className="btn btn-outline-primary" href="addro">
            Add Workout
          </a>
        </li>
      </div>
    </div>
  );
}
