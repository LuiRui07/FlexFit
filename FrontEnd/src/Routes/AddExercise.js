import { useEffect, useState } from "react";
import "../css/AddExercise.css";
import axios from "axios";

const mostrarVentana = () => {
  const ventana = document.getElementById("ventana_anyadir");
  ventana.classList.add("ventanaActiva");
};

const cerrarVentana = () => {
  const ventana = document.getElementById("ventana_anyadir");
  ventana.classList.remove("ventanaActiva");
};

export default function AddWorkout() {
  const idDia = window.location.pathname.split("/")[4];

  const [formData, setFormData] = useState({
    workoutday: Number(idDia),
    exerciseId: "",
    reps: "",
    weight: "",
    series: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const guardarEjer = async (e) => {
    e.preventDefault();
    if (
      formData.reps.length === 0 ||
      formData.series.length === 0 ||
      formData.weight.length === 0
    ) {
      window.confirm("Rellene los campos");
      return;
    } else {
      console.log(formData);
      formData.exerciseId = workoutType.id;
      console.log(formData);
      const response = await axios.post(
        "http://localhost:7777/api/exerciseDay/",
        formData
      );
      console.log(response.data);
      if (response.data.message === "ExerciseDay created successfully") {
        cerrarVentana();
        window.location.reload();
      } else {
        window.confirm("Error al añadir ejercicio");
      }
    }
  };


  const [todosLosEjs, setTodosLosEjs] = useState([]);

  const [ejersLista, setEjersLista] = useState([]);

  const [bodyPartList, setBodyPartList] = useState([]);

  const [loaded, setLoaded] = useState(false);

  const workoutTypess = async () => {
    axios.get("http://localhost:7777/api/exercise/").then((res) => {
      setEjersLista(res.data.data);
      setTodosLosEjs(res.data.data);
      setWorkoutType(res.data.data[0]);

      axios.get("http://localhost:7777/api/bodypart/").then((bp) => {
        let lista = [{ name: "Todo", idBodyPart: 0, subpart: null }, ...bp.data.data];
        setBodyPartList(lista);
        setLoaded(true);
      });
    });
  };

  useEffect(() => {
    workoutTypess();
    changeWorkOut(ejersLista[0]);
  }, []);

  const [workoutType, setWorkoutType] = useState(null);

  function changeWorkOut(workoutName) {
    setWorkoutType(
      ejersLista.find((workoutX) => workoutName === workoutX.name)
    );
  }

  function filterWorkouts(bodyPart) {
    if(bodyPart === '0'){
      console.log(bodyPart);
      console.log(todosLosEjs);
      setEjersLista(todosLosEjs);
      setWorkoutType(todosLosEjs[0]);
    }
    axios.get("http://localhost:7777/api/exercise/bodypart/" +bodyPart).then((bp) => {
      setEjersLista(bp.data.data);
      setWorkoutType(bp.data.data[0]);
    });
  }

  return (
    <div className="addExercise" id="ventana_anyadir">
      {loaded && (
        <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
          <div className="card-header">
            <h1>Añadir ejercicio</h1>
            <h2 onClick={cerrarVentana}>x</h2>
          </div>

          <form className="d-flex gap-5 align-items-center formAddExercise">
            <div>
              <img
                src={workoutType.image}
                alt="Not avaliable"
                height="350"
                width="350"
              ></img>
              <select
                className="form-select"
                id="bodyPartSelector"
                name="bp"
                onChange={() =>
                  filterWorkouts(document.getElementById("bodyPartSelector").value)
                }
              >
                {bodyPartList.map((bp) => (
                  <option value={bp.idBodyPart}>{bp.name} {bp.subpart != null ? `(${bp.subpart})` : ``}</option>
                ))}
              </select>

              <select
                className="form-select"
                id="sportSelector"
                name="ej"
                value = {workoutType.name}
                onChange={() =>
                  changeWorkOut(document.getElementById("sportSelector").value)
                }
              >
                {ejersLista.map((workoutX) => (
                  <option value={workoutX.name}>{workoutX.name}</option>
                ))}
              </select>
            </div>
            <div className="justify-content-around">
              <div className="d-flex w-100 align-items-center justify-content-between formData">
                <input
                  type="number"
                  placeholder="Sets"
                  name="series"
                  onChange={handleInputChange}
                  className="p-1 form-control reps hours"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Reps"
                  name="reps"
                  onChange={handleInputChange}
                  className="p-1 form-control reps hours"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Weight"
                  name="weight"
                  onChange={handleInputChange}
                  className="p-1 form-control sets hours"
                  min="0"
                />
              </div>
              <input
                type="submit"
                className="btn btn-outline-danger w-100 formData"
                value="Añadir"
                onClick={guardarEjer}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
