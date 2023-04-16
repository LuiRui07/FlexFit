import React from 'react'
import '../css/Login.css'
import Logo from "../images/logoRed.png";

import axios from 'axios';

const iniciarSesion = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);

    axios.get('http://localhost:7777/api/user/'+username+'/'+password).then(res => {
    
        var user = JSON.stringify(res.data.data);
        localStorage.setItem('user', user);
        window.location.href = "/home";

    }).catch(err => {
        alert("Usuario o contraseña incorrectos " + err);
        window.location.href = "/home";
    });
    
}


function Login() {
  return (
    <div className='bg-form'>

        <div className='container'>
            <form className='formLogin' >
                <div className='form-group d-flex align-items-center'>
                    <div >
                        <img src={Logo} width="180" height="180" alt="no disponible" className='formLogo'/>
                    </div>
                    <div>
                        <h2 className='display-6 title'>Inicia Sesión</h2>

                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='username' className='display-6'>Usuario</label>
                    <input type='text' className='form-control' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu usuario' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='display-6'>Contraseña</label>
                    <input type='password' className='form-control' id='password' aria-describedby='passwordHelp' placeholder='Introduce tu contraseña' required/>
                </div>
                <button type='submit' className='btn botonIniciarSesion' onClick={iniciarSesion}>Entrar</button>

                <div className='gotoRegister'>
                    <a className='link-register' href='/register'>No tengo una cuenta</a> 
                </div>
                
            </form>
        </div>


    </div>
  )
}

export default Login