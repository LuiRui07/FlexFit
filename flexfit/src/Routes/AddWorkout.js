import { useState } from "react";
import "../css/AddWorkout.css";
import HeaderFF from "./HeaderFF.js";

export default function AddWorkout() {
  const workoutTypes = [
    {
      name: "Bench Press",
      image:
        "https://us.123rf.com/450wm/volyk/volyk1709/volyk170900096/85501646-hombre-levantando-m%C3%BAsculos-en-press-de-banca.jpg",
    },
    {
      name: "Military Press",
      image:
        "https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6",
    },
    {
      name: "Squat",
      image:
        "https://us.123rf.com/450wm/lioputra/lioputra2112/lioputra211200477/179216722-man-doing-front-barbell-squat-exercise-flat-vector-illustration-isolated-on-white-background.jpg",
    },
    {
      name: "Bulgarian Squat",
      image:
        "https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2107/lioputra210700063.jpg",
    },
    {
      name: "T-bar Row",
      image:
        "https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2107/lioputra210700113.jpg",
    },
    {
      name: "Barbell Row",
      image:
        "https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2010/lioputra201000078.jpg",
    },
    {
      name: "Triceps Rope Pushdown",
      image:
        "https://cdn.vectorstock.com/i/preview-2x/49/69/man-doing-cable-tricep-pull-down-exercise-vector-35544969.webp",
    },
    {
      name: "Lateral Raises",
      image:
        "https://media.istockphoto.com/id/1408272073/vector/man-doing-cable-one-arm-lateral-raise-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=fA1FTtVr2SympFlEzbT435amoVGadDeeFMh5UfAHm3I=",
    },
  ];

  const [workoutType, setWorkoutType] = useState(workoutTypes[0]);

  function changeWorkOut(workoutName) {
    setWorkoutType(
      workoutTypes.find((workoutX) => workoutName === workoutX.name)
    );
  }

  return (
    <div>
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <h1>Register a new Workout</h1>
        <form
          className="d-flex gap-5 align-items-center"
          action="/saveWorkout"
          method="post"
        >
          <div>
            <img src={workoutType.image} alt="Not avaliable"></img>
            <select
              className="form-select"
              id="sportSelector"
              onChange={() =>
                changeWorkOut(document.getElementById("sportSelector").value)
              }
            >
              {workoutTypes.map((workoutX) => (
                <option value={workoutX.name}>{workoutX.name}</option>
              ))}
            </select>
          </div>
          <div className="justify-content-around">
            <input
              type="text"
              placeholder="Workout Name"
              className="w-100 form-control formData"
            />
            <div className="d-flex w-100 align-items-center justify-content-between formData">
              <input
                type="number"
                placeholder="Reps"
                className="p-1 form-control reps hours"
                min="0"
              />
              <input
                type="number"
                placeholder="Weight"
                className="p-1 form-control sets hours"
                min="0"
              />
            </div>

            <div className="d-flex w-100 align-items-center justify-content-between formData">
              <input
                type="time"
                placeholder="Time Spent"
                className="p-1 form-control hours"
              />
              <div className="small-ratings w-70">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-outline-primary w-100 formData"
              value="Register!"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
