import "./css/Login.css";
import App from "./App.js";

export default function LoginLui() {
  return (
    <div className="LoginPage">
      <h1 className="LoginPageTitle">Log in to FlexFit</h1>
      <form>
        <input type="text" name="username"></input>
        <br></br>
        <input type="password" name="password" />
        <br></br>
        <button type="submit" variant="primary" onClick={App}>
          Login
        </button>
      </form>
    </div>
  );
}