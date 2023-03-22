import { useState } from "react";

export default function AllWorkouts() {

    const WorkoutDB = [
        {
            name: "Bench Press on Monday",
            date: "12:00",
            reps: 10,
            weight: 60,
            time: "00:35:00",
            workoutType: {
                name: "Bench Press",
                image: "https://us.123rf.com/450wm/volyk/volyk1709/volyk170900096/85501646-hombre-levantando-m%C3%BAsculos-en-press-de-banca.jpg",
                bodyPart: "Chest"
            }
        },
        {
            name: "Militar Press on Monday",
            date: "13:00",
            reps: 6,
            weight: 45,
            time: "00:15:00",
            workoutType: {
                name: "Militar Press",
                image: "https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6",
                bodyPart: "Shoulders"
            }
        },
    ]

    const [workouts, setWorkouts] = useState(WorkoutDB);

    const filterByMuscle = (e) => {
        const selectedMuscle = e.target.value;
        if (selectedMuscle === "All") {
            setWorkouts(WorkoutDB);
        } else{
            const filteredWorkouts = WorkoutDB.filter((workout) => workout.workoutType.bodyPart === selectedMuscle);
            setWorkouts(filteredWorkouts);
        }

    }

    return (
        <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto ">
            <h1>Workouts</h1>

            <div className="d-flex pb-3">
                <select className="form-select" onChange={filterByMuscle}>
                    <option value="All">All</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                </select>
            </div>

            <div className="d-flex gap-5 cardTag" id="cardsSport">
                {workouts.map((workout) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{workout.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{workout.workoutType.name} - {workout.workoutType.bodyPart}</h6>
                            <p className="card-text">Date: {workout.date}</p>
                            <p className="card-text">Reps: {workout.reps}</p>
                            <p className="card-text">Weight: {workout.weight}</p>
                            <p className="card-text">Time: {workout.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
