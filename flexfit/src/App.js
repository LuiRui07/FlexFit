import "./css/App.css";
import Login from "./Routes/Login.js";
import Home from "./Routes/Home.js";

function App(props) {

    if(props){
      return <Login />
    }else {
      return <Home/>
    }
    
}

export default App;
