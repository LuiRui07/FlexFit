import HeaderFF from "./HeaderFF";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="h-100">
      <HeaderFF />
      <div className="fuerte">
        <h1>
          Hola mi leal @usuario<br></br>
          Ready to do exercise?
        </h1>
      </div>
    </div>
  );
}
