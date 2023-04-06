import { useState } from "react";
import "../css/Workouts.css";
import HeaderFF from "./HeaderFF.js";

export default function AllWorkouts() {
  const WorkoutDB = [
    {
      name: "Rutina 1",
      date: "12:00",
      reps: 10,
      weight: 60,
      time: "00:35:00",
      workoutType: {
        name: "Bench Press",
        image:
          "https://us.123rf.com/450wm/volyk/volyk1709/volyk170900096/85501646-hombre-levantando-m%C3%BAsculos-en-press-de-banca.jpg",
      },
    },
    {
      name: "Rutina 2",
      date: "13:00",
      reps: 6,
      weight: 45,
      time: "00:15:00",
      workoutType: {
        name: "Militar Press",
        image:
          "https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6",
      },
    },
    {
      name: "Rutina 3",
      date: "14:00",
      reps: 112,
      weight: 333,
      time: "00:15:00",
      workoutType: {
        name: "Sentadilla",
        image:
          "https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6",
      },
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
                <h6 className="card-subtitle mb-2 text-muted">
                  {workout.workoutType.name} - {workout.workoutType.bodyPart}
                </h6>
                <p className="card-text">Date: {workout.date}</p>
                <p className="card-text">Reps: {workout.reps}</p>
                <p className="card-text">Weight: {workout.weight}</p>
                <p className="card-text">Time: {workout.time}</p>
              </div>
            </div>
          ))}
        </div>
        <li className="list-group-item" id="add">
          <a className="btn btn-outline-primary" href="add">
            Add Workout
          </a>
        </li>
      </div>
    </div>
  );
}
