import "../css/AboutUs.css";
import HeaderFF from "./HeaderFF";
import { FaInstagram } from "react-icons/fa";
import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("AboutUsHeaderLi").classList.add("active");
  }, []);
  document.title="Sobre Nosotros";
  return (
    <div className="backgroudTochoAbout">
      <HeaderFF />
      <div className="aboutUsContainer">
        <div className="container align-items-center">
          <h1>¡Bienvenidos a FlexFit!</h1>
          <p>
            Nuestra aplicación es una herramienta útil para los entusiastas del
            deporte que desean llevar un registro de sus entrenamientos y tener
            acceso a una variedad de rutinas de entrenamiento para lograr sus
            objetivos.{" "}
          </p>
          <p>
            En nuestra aplicación, puedes crear y guardar tus propias rutinas de
            entrenamiento personalizadas y seguir tu progreso a medida que
            alcanzas tus metas. También te ofrecemos una selección de rutinas de
            entrenamiento predefinidas que puedes utilizar para inspirarte y
            mantener tu entrenamiento fresco y desafiante.{" "}
          </p>
          <p>
            Además, puedes compartir tus rutinas de entrenamiento con amigos y
            familiares para motivarte mutuamente y trabajar juntos para alcanzar
            tus objetivos.{" "}
          </p>
          <p>
            Descarga nuestra aplicación hoy mismo y comienza a disfrutar de los
            beneficios de tener un entrenador personal en tu bolsillo.{" "}
          </p>
          <div className="contactInfo">
            <div className="contactItem">
              <span>Teléfono:</span>
              <a href="tel:+123456789">+123456789</a>
            </div>
            <div className="contactItem">
              <span>Correo electrónico:</span>
              <a href="mailto:info@flexfitapp.com">info@myfitnessapp.com</a>
            </div>
            <div className="contactItem">
              <span>Instagram:</span>
              <a href="https://www.instagram.com/flexfitapp/">
                <FaInstagram />
                FlexFitApp
              </a>
            </div>
          </div>
          <p>
            Descarga nuestra aplicación hoy mismo y comienza a disfrutar de los
            beneficios de tener un entrenador personal en tu bolsillo.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
