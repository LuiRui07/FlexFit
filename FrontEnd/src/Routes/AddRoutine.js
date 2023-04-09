import { useState } from "react";
import HeaderFF from "./HeaderFF.js";
import "../css/AddRoutine.css";

export default function addRoutine() {
  return (
    <div>
      <HeaderFF />
      <div className="mt-5 card container p-4 justify-content-center align-items-center overflow-auto">
        <input
          type="text"
          placeholder="Workout Name"
          className="w-50 form-control formData"
        />
        <div>
          <input
            type="text"
            placeholder="Day"
            className="w-200 form-control formData"
          />
        </div>

        <li className="list-group-item" id="add">
          <a className="btn btn-outline-primary">Add Day</a>
        </li>
      </div>
    </div>
  );
}
