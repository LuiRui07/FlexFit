import { useState , useEffect} from "react";
import "../css/Workouts.css";
import HeaderFF from "./HeaderFF.js";
import axios from "axios";



export default function AllWorkouts() {
  // const WorkoutDB = [
  //   {
  //     name: "Rutina 1",
  //     desc: "Frecuencia 1",
  //     dias: 5,
  //   },
  //   {
  //     name: "Rutina 2",
  //     desc: "Frecuencia 2",
  //     dias: 8,
  //   },
  //   {
  //     name: "Rutina 3",
  //     desc: "FullBody",
  //     dias: 4,
  //   },
  // ];

  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:7777/api/workout/user/"+user.id);
    return response.data.data;
  };

  useEffect(() =>  {
    getWorkouts().then((workouts) => {
      console.log(workouts)
      setWorkouts(workouts);
    });

  }, []);


  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  const [workouts, setWorkouts] = useState([]);


  if(user === null){
    window.location.href = "/home";
  }

  useEffect(() => {
    document.getElementById("workoutsHeaderLi").classList.add("active");
  },[]);

  return (
    <div>
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <h1>Workouts</h1>

        <div className="d-flex pb-3">
          <input className="barra" type="text" placeholder="Buscar"></input>
          <div className="btn" id="search">
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div className="d-flex gap-5 cardTag" id="cardsSport">


          {workouts.length === 0 && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">No hay rutinas</h5>
              </div>
            </div>
          )}

          {workouts.map((workout) => (
            <div className="card rutinaClikcable" onClick={alert("woow")}>
              <h5 className="card-title titleWorkout">{workout.name}</h5>
              <div className="card-body">
                <p className="card-text">Descripción: <strong>{workout.description}</strong></p>
                <p className="card-text ">Dias: <strong>{workout.workout_days.length}</strong></p>
                <p className="card-text ">Dificultad: <strong>{workout.difficulty}</strong></p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <a className="btn btn-outline-danger mt-4 d-flex" href="addro">
            Add Workout
          </a>
        </div>

      </div>
    </div>
  );
}
