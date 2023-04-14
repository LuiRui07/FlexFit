import React from 'react'
import HeaderFF from "./HeaderFF";
import { useEffect, useState } from 'react';



function HomeLoggedIn() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    document.getElementById("homeHeaderLi").classList.add("active");

    localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')));
  },[]);


  return (
    <div>
        <HeaderFF />  
        <div className="fuerte">
        <h1>
            Hola {JSON.stringify(user)}<br></br>
            Ready to do exercise?
        </h1>
        </div>
    </div>
  )
}

export default HomeLoggedIn