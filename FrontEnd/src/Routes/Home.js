import HeaderFF from "./HeaderFF";
import '../css/Home.css'

import axios from 'axios';

export default function Home() {

  axios.get('http://localhost:7777/api/exercise').then((res) => { 
    console.log(res.data);
  });
  

  return (
    <div className="h-100">
      <HeaderFF/>
      <div className="fuerte">
        <h1>
          Hola @bellaco<br></br>
          Ready to do exercise?
        </h1>
      </div>
    </div>
  );
}