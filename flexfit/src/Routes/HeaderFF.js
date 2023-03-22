import Logo from '../images/logo.png';
import '../css/Header.css'

export default function HeaderFF() {
  return (
    <div className='d-flex w-100'>
        <ul className="nav nav-tabs align-items-center w-100">
            <li className="nav-item">
                <img src={Logo} width="50" height="50" alt="no disponible"/>
            </li>
            <li className="nav-item-col">
                <a className="nav-link" href="home">Home</a>
            </li>
            <li className="nav-item-col">
                <a className="nav-link" href="workouts">Workout</a>
            </li>
            <li className="nav-item-col">
                <a className="nav-link" href='cw'>Add Workout</a>
            </li>
        </ul>
    </div>
  );
}
