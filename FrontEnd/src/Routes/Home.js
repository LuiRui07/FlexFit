import HomeLoggedIn from "./HomeLoggedIn";
import Login from "./Login";
import "../css/Home.css";

import { useEffect, useState } from "react";


export default function Home() {


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
