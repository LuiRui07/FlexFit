import { useState , useEffect} from "react";
import "../css/Workouts.css";
import HeaderFF from "./HeaderFF.js";

export default function AllWorkouts() {
  const WorkoutDB = [
    {
      name: "Rutina 1",
      desc: "Frecuencia 1",
      dias: 5,
    },
    {
      name: "Rutina 2",
      desc: "Frecuencia 2",
      dias: 8,
    },
    {
      name: "Rutina 3",
      desc: "FullBody",
      dias: 4,
    },
  ];

  const [workouts, setWorkouts] = useState(WorkoutDB);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  if(user === null){
    window.location.href = "/home";
  }

  useEffect(() => {
    document.getElementById("workoutsHeaderLi").classList.add("active");
  },[]);

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
                <p className="card-text">Dias: {workout.dias}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="btn btn-outline-primary mt-4" href="addro">
          Add Workout
        </a>
      </div>
    </div>
  );
}
