import { useEffect, useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";
import axios from "axios";

export default function EditRoutine() {
  const getWorkout = async () => {
    const idRoutine = window.location.pathname.split("/")[2];
    const response = await axios.get(
      "http://localhost:7777/api/workout/" + idRoutine
    );
    console.log(response.data.data);
    return response.data.data;
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const crearBotonDia = (dia) => {
    const boton_dia = document.createElement("li");
    boton_dia.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const dia_container = document.createElement("div");
    dia_container.className =
      "alert alert-danger d-flex justify-content-between align-items-center gap-3 botonDiaLista";
    dia_container.tabIndex = 0;
    dia_container.addEventListener(
      "click",
      () =>
        (window.location.href = "/rutina/" + rutinaActual.id + "/dia/" + dia.id)
    );

    boton_dia.appendChild(dia_container);

    const dia_name = document.createElement("h3");
    dia_name.className = "diaName";
    dia_name.textContent = dia.name;

    dia_container.appendChild(dia_name);

    if (rutinaActual.user_id === user.id) {
      const boton_eliminar = document.createElement("button");
      boton_eliminar.className = "btn btn-danger clickDeleteDia";
      boton_eliminar.textContent = "Borrar";
      boton_eliminar.addEventListener("click", () =>
        eliminar_dia(boton_dia, dia.id)
      );

      boton_dia.appendChild(boton_eliminar);
    }

    return boton_dia;
  };

  function anyadir_dia() {
    const lista = document.getElementById("listaDias");

    axios
      .post("http://localhost:7777/api/day/", {
        name: "Dia " + (diasRutina.length + 1),
        workout_id: rutinaActual.id,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Day created successfully") {
          const diaCreado = response.data.data;
          lista.appendChild(crearBotonDia(diaCreado));

          setDiasRutina([...diasRutina, diaCreado]);
        }
      });
  }

  function eliminar_dia(elemento, idDia) {
    console.log("Eliminando dia con id: " + idDia);
    axios
      .delete("http://localhost:7777/api/day/" + idDia, { id: idDia })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Day deleted successfully") {
          diasRutina.pop();
          if (diasRutina === undefined) {
            setDiasRutina([]);
          } else {
            setDiasRutina(diasRutina);
          }
          let lista = document.getElementById("listaDias");
          lista.removeChild(elemento);
        }
      });
  }

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user_id: user.id,
    favorite: false,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const guardarRutina = async (e) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      window.confirm("No puedes dejar el nombre de la rutina vacío");
    } else {
      if (rutinaActual === null) {
        formData.favorite = rutinaFavorita;
        const response = await axios.post(
          "http://localhost:7777/api/workout/",
          formData
        );
        console.log(response.data);

        if (response.data.message === "Workout created successfully") {
          window.confirm("Rutina guardada correctamente");
          setRutinaActual(response.data.data);
          window.location.href = "/workouts";
        } else {
          window.confirm("Error al guardar la rutina");
        }
      } else {
        formData.favorite = rutinaFavorita;
        const response = await axios.put(
          "http://localhost:7777/api/workout/" + rutinaActual.id,
          formData
        );
        console.log(response.data);

        if (response.data.message === "Workout updated successfully") {
          window.confirm("Rutina actualizada correctamente");
          setRutinaActual(response.data.data);
          window.location.href = "/workouts";
        } else {
          window.confirm("Error al guardar la rutina");
        }
      }
    }
  };

  function borrarRutina() {
    console.log("Eliminando rutina con id: " + rutinaActual.id);
    axios
      .delete("http://localhost:7777/api/workout/" + rutinaActual.id, { id: rutinaActual.id })
      .then((response) => {
        console.log(response.data);
        alert("Borrado");
        window.location.href = "/workouts";
      });
  }


  const [rutinaFavorita, setRutinaFavorita] = useState(false);
  const [rutinaActual, setRutinaActual] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [diasRutina, setDiasRutina] = useState([]);

  const favourite = () => {
    let corazon = document.getElementById("corazon");
    if (corazon.classList.contains("fa-heart-o")) {
      corazon.classList.remove("fa-heart-o");
      corazon.classList.add("fa-heart");
      setRutinaFavorita(true);
    } else {
      corazon.classList.remove("fa-heart");
      corazon.classList.add("fa-heart-o");
      setRutinaFavorita(false);
    }
  };

  useEffect(() => {
    document.getElementById("workoutsHeaderLi").classList.add("active");

    getWorkout().then((workout) => {
      setRutinaActual(workout);
      setDiasRutina(workout.workout_days);
      setFormData({
        name: workout.name,
        description: workout.description,
        user_id: user.id,
        favorite: workout.favorite,
      });
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    console.log(diasRutina);
    if (diasRutina !== null) {
      let lista = document.getElementById("listaDias");
      diasRutina.forEach((dia) => {
        let boton = crearBotonDia(dia);
        lista.appendChild(boton);
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (rutinaActual !== null && rutinaActual.user_id === user.id) {
      document.getElementById("nombreRutina").value = formData.name;
      document.getElementById("descripcionRutina").value = formData.description;
      if (formData.favorite === true) {
        let corazon = document.getElementById("corazon");
        corazon.classList.remove("fa-heart-o");
        corazon.classList.add("fa-heart");
        setRutinaFavorita(true);
      } else {
        let corazon = document.getElementById("corazon");
        corazon.classList.remove("fa-heart");
        corazon.classList.add("fa-heart-o");
        setRutinaFavorita(false);
      }
    }
  }, [formData]);

  return (
    <div>
      <HeaderFF />

      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <ul className="breadcrumb">
          <li>
            <a href="/">FlexFit</a>
          </li>
          <li>/</li>
          <li>
            <a href="/workouts">Mis Rutinas</a>
          </li>
          <li>/</li>
          <li className="breadcrumbActive">Añadir Rutina</li>
        </ul>
        {!loaded && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {loaded && (
          <div>
            <form>
              <div className="alert alert-primary" role="alert">
                Pulsa en los dias para ver más información
              </div>

              <div className="form-group d-flex justify-content-center">
                <label htmlFor="nombreRutina">Nombre de la rutina</label>
                <input
                  type="text"
                  className="form-control nombreRutina ml-2"
                  name="name"
                  id="nombreRutina"
                  placeholder="Añade el nombre de la rutina..."
                  onChange={handleInputChange}
                  value={formData.name}
                  {...(rutinaActual.user_id !== user.id && { readOnly: true })}
                  required
                />

                {rutinaActual !== null &&
                  rutinaActual.favorite === true &&
                  rutinaActual.user_id === user.id && (
                    <span className="corazonaco">
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        id="corazon"
                        onClick={favourite}
                      ></i>
                    </span>
                  )}

                {rutinaActual !== null &&
                  rutinaActual.favorite === false &&
                  rutinaActual.user_id === user.id && (
                    <span className="corazonaco">
                      <i
                        className="fa fa-heart-o"
                        aria-hidden="true"
                        id="corazon"
                        onClick={favourite}
                      ></i>
                    </span>
                  )}
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <label htmlFor="descripcionRutina">Descripción</label>
                <textarea
                  className="form-control nombreRutina mt-3 rounded"
                  placeholder="Añade una breve descripcion..."
                  name="description"
                  id="descripcionRutina"
                  value={formData.description}
                  onChange={handleInputChange}
                  {...(rutinaActual.user_id !== user.id && { readOnly: true })}
                />
              </div>
            </form>
            <div className="mt-3" style={{ textAlign: "center" }}>
              {formData.name.length === 0 && (
                <div className="alert alert-danger" role="alert">
                  Debe añadir un nombre a la rutina
                </div>
              )}

              {formData.name.length > 0 && rutinaActual.user_id === user.id && (
                <button
                  className="btn btn-danger clickAddDia"
                  onClick={guardarRutina}
                >
                  {rutinaActual === null ? "Crear" : "Guardar"}
                </button>
              )}
            </div>

            {rutinaActual !== null && (
              <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
                <ul
                  className="align-items-center"
                  id="listaDias"
                  style={{
                    overflowY: "scroll",
                    padding: "30px",
                    maxHeight: "400px",
                    marginBottom: "30px",
                  }}
                ></ul>
                {diasRutina.length === 0 && (
                  <div className="alert alert-danger" role="alert">
                    Esta rutina aún no tiene dias añadidos
                  </div>
                )}

                {rutinaActual.user_id === user.id && (
                  <button
                    className="btn btn-danger clickAddDia"
                    onClick={anyadir_dia}
                  >
                    Añadir dia
                  </button>
                )}
              </div>
            )}

            {rutinaActual.user_id === user.id && (
              <div>
                <button type="button" id="borrarRutina" class="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Borrar rutina
                </button>

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
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" onClick={borrarRutina} class="btn btn-danger" >Confirmar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}




        <a id="volver" href="/workouts" className="btn btn-warning">
          Volver
        </a>
      </div>
    </div>
  );
}
