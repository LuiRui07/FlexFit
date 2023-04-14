import HomeLoggedIn from "./HomeLoggedIn";
import Login from "./Login";
import "../css/Home.css";

import { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
  // axios.get("http://localhost:7777/api/exercise").then((res) => {
  //   console.log(res.data);
  // });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));

    if (user != null) {
      document.getElementById("homeHeaderLi").classList.add("active");
    }
  }, []);

  return (
    <div className="h-100">{user == null ? <Login /> : <HomeLoggedIn />}</div>
  );
}
