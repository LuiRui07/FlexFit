import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import Login from "./Routes/Login.js";
import Register from "./Routes/Register.js";
import Home from "./Routes/Home";

import { RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path:'/register', element:<Register />},
  { path: '/home', element: <Home />}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

