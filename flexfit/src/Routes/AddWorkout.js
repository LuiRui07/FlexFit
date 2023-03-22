import { useEffect, useState } from "react";
import "../css/AddWorkout.css";

export default function AddWorkout() {


    const workoutTypes = [
        {
        name: "Bench Press",
        image: "https://us.123rf.com/450wm/volyk/volyk1709/volyk170900096/85501646-hombre-levantando-m%C3%BAsculos-en-press-de-banca.jpg"
        },
        {
        name: "Military Press",
        image: "https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6"
        }
    ]

    const [workoutType, setWorkoutType] = useState(workoutTypes[0]);

    function changeWorkOut(workoutName) {
        setWorkoutType(workoutTypes.find((workoutX) => workoutName === workoutX.name));
    }

    return (
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <h1>Register a new Workout</h1>
        <form className="d-flex gap-5 align-items-center" action="/saveWorkout" method="post">
            <div>
                <img src={workoutType.image} alt="Not avaliable"></img>
                <select className="form-select" id="sportSelector" onChange={() => changeWorkOut(document.getElementById('sportSelector').value)}>
                    {workoutTypes.map((workoutX) => (
                        <option value={workoutX.name}>{workoutX.name}</option>
                    ))}
                </select>
            </div>
            <div className="justify-content-around">
                <input type="text" placeholder="Workout Name" className="w-100 form-control formData"/>
                <div className="d-flex w-100 align-items-center justify-content-between formData">
                    <input type="number" placeholder="Reps" className="p-1 form-control reps hours" min="0"/>
                    <input type="number" placeholder="Weight" className="p-1 form-control sets hours" min="0"/>
                </div>

                <div className="d-flex w-100 align-items-center justify-content-between formData">
                    <input type="time" placeholder="Time Spent" className="p-1 form-control hours"/>
                    <div className="small-ratings w-70">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
                <input type="submit" className="btn btn-outline-primary w-100 formData" value="Register!" />
            </div>

        </form>
      </div>
    );
}