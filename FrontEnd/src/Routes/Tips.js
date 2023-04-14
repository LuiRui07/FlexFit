import HeaderFF from "./HeaderFF";
import "../css/Historial.css";
import { useEffect } from "react";

export default function Tips() {

  return (
    <div className="h-100">
      <HeaderFF />
      
      <div className="fuerte">
          <h1>
            Consejos para principiantes<br></br>
          </h1>
          <div className="row p-4">
          <div className="col-sm">
            <div className="card h-100">
              <div className="card-body text-dark">
               <h5>
               1. Cuando empieces en el gimnasio, es importante que no te esfuerces demasiado al principio. Trata de empezar con algunas de las rutinas simples que recomendamos y aumentar gradualmente la intensidad de tus ejercicios.
               </h5>
               <h5>
               2. Asegúrate de que estás realizando los ejercicios con la técnica adecuada, asi previenes lesiones y garantizas que el musculo correcto este trabajando. Si tienes dudas, no dudes en pedir ayuda a algún entrenador o instructor.
               </h5>
               <h5>
               3. No te excedas en los entrenamientos. Tu cuerpo necesita tiempo para recuperarse después de un esfuerzo físico intenso. Descansa adecuadamente y evita el sobreentrenamiento.
               </h5>
               <h5>
               4. La alimentación es muy importante para complementar los entrenamientos. Trata de llevar una alimentación balanceada, rica en proteínas, carbohidratos y grasas saludables.
               </h5>
               <h5>
               5. Los resultados no llegan de la noche a la mañana. Sé persistente en tus entrenamientos y sigue una rutina de entrenamiento constante para alcanzar tus objetivos.
               </h5>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}