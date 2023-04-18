import { useEffect, useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";
import axios from "axios";




export default function AddRoutine() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function anyadir_dia() {

    const nombreDia = "Dia ";
    const boton_dia = document.createElement("li");
    boton_dia.classList.add("nombreDia", "list-group-ite", "d-flex");
    let lista = document.getElementById("listaDias");

    const enlace_dia = document.createElement("a");
    enlace_dia.className = "btn btn-outline-danger ";
    enlace_dia.textContent = nombreDia + (lista.childElementCount + 1);
    enlace_dia.href = "addro/" + (lista.childElementCount + 1);

    const boton_eliminar = document.createElement("button");
    boton_eliminar.className = "btn btn-warning mt-4";
    boton_eliminar.textContent = "Delete";
    boton_eliminar.addEventListener("click", () => eliminar_dia(boton_dia));

    boton_dia.appendChild(enlace_dia);
    boton_dia.appendChild(boton_eliminar);
    lista.appendChild(boton_dia);

    setDiasRutina([...diasRutina, "dia"]);
  }

  function eliminar_dia(elemento) {
    console.log(diasRutina.length)
    let lista = document.getElementById("listaDias");
    lista.removeChild(elemento);

  }



  const [formData, setFormData] = useState({
    name: '',
    description: '',
    user_id: user.id,
    favorite: false
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
      window.confirm("No puedes dejar el nombre de la rutina vacío")
    } else {

      if (rutinaActual === null) {
        formData.favorite = rutinaFavorita
        const response = await axios.post('http://localhost:7777/api/workout/', formData)
        console.log(response.data);

        if (response.data.message === "Workout created successfully") {
          window.confirm("Rutina guardada correctamente")
          window.location.href = "/rutina/" + response.data.data.id
        } else {
          window.confirm("Error al guardar la rutina")
        }
      } else {
        formData.favorite = rutinaFavorita
        const response = await axios.put('http://localhost:7777/api/workout/' + rutinaActual.id, formData)
        console.log(response.data);

        if (response.data.message === "Workout updated successfully") {
          window.confirm("Rutina actualizada correctamente")
          setRutinaActual(response.data.data)
        } else {
          window.confirm("Error al guardar la rutina")
        }
      }
    }
  }

  const obtenerDiasRutina = () => {
    return []
  };

  const [rutinaFavorita, setRutinaFavorita] = useState(false);

  const [diasRutina, setDiasRutina] = useState(obtenerDiasRutina);

  const [rutinaActual, setRutinaActual] = useState(null);

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
  }

  return (
    <div>
      <HeaderFF />

      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <form>
          <div className="form-group d-flex justify-content-center">
            <label for="nombreRutina" className="justify-content-center ">Nombre de la rutina</label>
            <input type="text" className="form-control nombreRutina ml-2" name="name" id="nombreRutina" placeholder="Añade el nombre de la rutina..." onChange={handleInputChange} required />

            {rutinaActual !== null && rutinaActual.favorite === true && <span className="corazonaco"><i className="fa fa-heart" aria-hidden="true" id="corazon" onClick={favourite}></i> </span>}
            {rutinaActual !== null && rutinaActual.favorite === false && <span className="corazonaco"><i className="fa fa-heart-o" aria-hidden="true" id="corazon" onClick={favourite}></i> </span>}

          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <label for="descripcionRutina">Descripción</label>
            <textarea className="form-control nombreRutina mt-3 rounded" placeholder="Añade una breve descripcion..." name="description" id="descripcionRutina" onChange={handleInputChange} />
          </div>

        </form>
        <div class="mt-3">
          {
            formData.name.length === 0 &&
            (
              <div className="alert alert-danger" role="alert">
                Debe añadir un nombre a la rutina
              </div>
            )

          }
          {
            formData.name.length > 0 &&
            (
              <button className="btn btn-danger clickAddDia" onClick={guardarRutina}>{rutinaActual === null ? "Crear" : "Guardar"}</button>
            )
          }

        </div>

        {
          rutinaActual !== null && (
            <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">

              <ul className="align-items-center" id="listaDias"></ul>
              {
                diasRutina.length === 0 &&
                (
                  <div className="alert alert-danger" role="alert">
                    Debe añadir al menos un dia
                  </div>
                )
              }
              <button className="btn btn-danger clickAddDia" onClick={anyadir_dia}>
                Añadir dia
              </button><br />
              <div className="">
                {
                  diasRutina.length === 0 && (
                    <button className="btn btn-danger clickAddDia" disabled="true">GUARDAR DIAS</button>
                  )
                }

                {
                  diasRutina.length > 0 && (
                    <button className="btn btn-danger clickAddDia">GUARDAR DIAS</button>
                  )
                }

              </div>
            </div>

          )
        }
      </div>

    </div>
  );
}
