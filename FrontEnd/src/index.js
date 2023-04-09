import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Home from "./Routes/Home";
import AddWorkout from "./Routes/AddExercise";
import AllWorkouts from "./Routes/Workouts";
import Historial from "./Routes/Historial";
import Cuenta from "./Routes/Cuenta";
import AddRoutine from "./Routes/AddRoutine";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/addex", element: <AddWorkout /> },
  { path: "/workouts", element: <AllWorkouts /> },
  { path: "/historial", element: <Historial /> },
  { path: "/cuenta", element: <Cuenta /> },
  { path: "/addro", element: <AddRoutine /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
