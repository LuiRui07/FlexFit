import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Home from "./Routes/Home";
import AddWorkout from "./Routes/AddWorkout";
import AllWorkouts from "./Routes/AllWorkouts";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/cw", element: <AddWorkout /> },
  { path: "/workouts", element: <AllWorkouts /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
