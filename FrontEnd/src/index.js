import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Home from "./Routes/Home";
import AddWorkout from "./Routes/AddExercise";
import AllWorkouts from "./Routes/Workouts";
import Cuenta from "./Routes/Cuenta";
import AddRoutine from "./Routes/AddRoutine";
import Register from "./Routes/Register";
import AddExercise_Day from "./Routes/AddExercise_Day";
import EditRoutine from "./Routes/EditRoutine";
import AboutUs from "./Routes/AboutUs";
import EditarCuenta from "./Routes/EditarCuenta";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Tips from "./Routes/Tips";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/addex", element: <AddWorkout /> },
  { path: "/workouts", element: <AllWorkouts /> },
  { path: "/tips", element: <Tips /> },
  { path: "/cuenta", element: <Cuenta /> },
  { path: "/addro", element: <AddRoutine /> },
  { path: "/register", element: <Register /> },
  { path: "/rutina/:id", element: <EditRoutine /> },
  { path: "/rutina/:rutina/dia/:dia", element: <AddExercise_Day /> },
  { path: "/addro/:dia/:nombreEjer", element: <AddExercise_Day /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/editarcuenta", element: <EditarCuenta /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
