import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

export default function LoginPage() {
  return (
    <div className=''>
      <div className="container card w-40 mt-5">
        <div className="container card-body">
          <form className='d-grid gap-3' action='/home'>
            <div className='w-100'>
              <label for="username">Nombre de usuario: </label>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>

            </div>


            <div className='w-100'>
              <label for="password">Contraseña: </label>
              <input type="password" id="password" name="password"  className=' w-100'/>
            </div>

            <input type="submit" value="Iniciar sesión" className='btn btn-primary' />
            <Link to='/register' className='text-bg-secondary p-2 rounded  text-center'>Registrarse</Link>
          </form>
        </div>
      
      
      </div>
    </div>

  );
}
