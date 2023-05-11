import HeaderFF from "./HeaderFF";
import { useState } from "react";
import axios from "axios";
import "../css/EditarCuenta.css";

export default function EditarCuenta() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [statusMessage, setStatusMessage] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState({
    username: user.username,
    image : user.image,
    nombre: user.nombre,
    apellido1: user.apellido1,
    apellido2: user.apellido2,
    peso: user.peso,
    altura: user.altura,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      "http://localhost:7777/api/user/" + user.id,
      formData
    );

    console.log(response.data);

    setStatusMessage(response.data.message);
    alert("Actualizado correctamente")
    window.location.href = "/home";
  };

  return (
    <div>
      <HeaderFF />
      <div className="fuerza">
        <form className="formEdit" method="post">
          <div className="d-flex justify-content-center">
            <div>
              <h2 className="editarHead">Editar Perfil </h2>
            </div>
          </div>
          Foto de perfil
          <div
            className="d-flex justify-content-center profile-container foto"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <div className="col-6">
              <img
                src={user.image}
                alt="Foto de perfil"
                className="profile-picture"
                height="250px"
                width="250px"
              />
            </div>
            <div className="col-6 text-end">
              <div>
                <label htmlFor="name" className="fs-6 ">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control   user-data-input"
                  id="nombre"
                  aria-describedby="nameHelp"
                  maxLength={50}
                  name="nombre"
                  value={formData.image}
                  required
                  onChange={""}
                />
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-around">
            <div>
              <label htmlFor="username" className="fs-6">
                Usuario (*)
              </label>
              <input
                type="text"
                className="form-control w-20"
                id="username"
                aria-describedby="usernameHelp"
                maxLength={30}
                name="username"   
                value={formData.username}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around datos">
            <div className="nombreInputs">
              <div>
                <label htmlFor="name" className="fs-6">
                  Nombre (*)
                </label>
                <input
                  type="text"
                  className="form-control   user-data-input"
                  id="nombre"
                  aria-describedby="nameHelp"
                  maxLength={50}
                  name="nombre"
                  value={formData.nombre}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="apellido1" className="fs-6">
                  Apellido 1 (*)
                </label>
                <input
                  type="text"
                  className="form-control user-data-input"
                  id="apellido1"
                  aria-describedby="apellido1Help"
                  maxLength={50}
                  value={formData.apellido1}
                  name="apellido1"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="apellido2" className="fs-6">
                  Apellido 2
                </label>
                <input
                  type="text"
                  className="form-control user-data-input"
                  id="apellido2"
                  aria-describedby="apellido2Help"
                  maxLength={50}
                  value={formData.apellido2}
                  name="apellido2"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="dataInputs">
              <div>
                <label htmlFor="weight" className="fs-6">
                  Peso (*)
                </label>
                <input
                  type="number"
                  className="form-control user-data-input"
                  id="weight"
                  aria-describedby="weightHelp"
                  name="peso"
                  value={formData.peso}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="height" className="fs-6">
                  Altura
                </label>
                <input
                  type="number"
                  className="form-control user-data-input"
                  id="height"
                  aria-describedby="heightHelp"
                  name="altura"
                  value={formData.altura}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="botones">
            <button className="btn btn-outline-danger" onClick={handleSubmit}>
              Guardar Cambios
            </button>
            <a className="btn btn-outline-dark"> Cambiar Contraseña</a>
          </div>
        </form>
      </div>
    </div>
  );
}
