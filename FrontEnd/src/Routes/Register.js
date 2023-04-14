import React from 'react'
import '../css/Register.css'
import Logo from "../images/logoRed.png";


function Register() {
  return (
    <div className='bg-form'>

        <div className='container'>
            <form className='formRegister'>
                <div className='d-flex justify-content-center'>
                    <div >
                        <img src={Logo} width="180" height="180" alt="no disponible" className='formLogo'/>
                    </div>
                    <div>
                        <h2 className='display-6 title'>Registrate</h2>

                    </div>
                </div>
                <div className='d-flex gap-3 justify-content-around'>
                    <div>
                        <label htmlFor='username' className='fs-6'>Usuario (*)</label>
                        <input type='text' className='form-control w-20' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu usuario' maxLength={30} required/>
                    </div>
                    <div>
                        <label htmlFor='password' className='fs-6'>Contraseña (*)</label>
                        <input type='password' className='form-control' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu contraseña' required/>
                    </div>
                    <div>
                        <label htmlFor='password' className='fs-6'>Repite la Contraseña (*)</label>
                        <input type='password' className='form-control' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu contraseña' required/>
                    </div>
                    
                </div>
                
                <div className='d-flex justify-content-around datos'>
                    <div className='nombreInputs'>
                        <div>
                            <label htmlFor='name' className='fs-6'>Nombre (*)</label>
                            <input type='text' className='form-control   user-data-input' id='name' aria-describedby='nameHelp' placeholder='Introduce tu nombre' maxLength={50} required/>
                        </div>
                        <div>
                            <label htmlFor='password' className='fs-6'>Apellido 1 (*)</label>
                            <input type='password' className='form-control user-data-input' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu apellido 1' required/>
                        </div>
                        <div>
                            <label htmlFor='password' className='fs-6'>Apellido 2</label>
                            <input type='password' className='form-control user-data-input' id='username' aria-describedby='usernameHelp' placeholder='Introduce tu apellido 2' />
                        </div>
                        
                    </div>

                    <div className='dataInputs'>
                        <div>
                            <label htmlFor='age' className='fs-6'>Edad (*)</label>
                            <input type='number' className='form-control   user-data-input' id='age' aria-describedby='ageHelp' min={0} max={120} required/>
                        </div>
                        <div>
                            <label htmlFor='weight' className='fs-6'>Peso (*)</label>
                            <input type='number' className='form-control user-data-input' id='weight' aria-describedby='weightHelp' required/>
                        </div>
                        <div>
                            <p className='fs-6'>Sexo (*)</p>
                            
                            <div className='sexInputs'>
                                <label htmlFor='sex' className='fs-6'>Hombre</label>
                                <input type='radio' className='' id='Hombre' aria-describedby='sexHelp' name='sex' value='H' required/>
                                <label htmlFor='sex' className='fs-6'>Mujer</label>
                                <input type='radio' className='' id='Mujer' aria-describedby='sexHelp' name='sex' value='M' required/>
                            </div>


                        </div>

                        <div>
                            <label htmlFor='height' className='fs-6'>Altura (*)</label>
                            <input type='number' className='form-control user-data-input' id='height' aria-describedby='heightHelp' required/>
                        </div>
                    
                    </div>

                </div>



                <button type='submit' className='btn botonIniciarSesion'>Registrarme</button>

                <div className='gotoRegister'>
                    <a className='link-register' href='/home'>Ya tengo una cuenta</a> 
                </div>
                
            </form>
        </div>


    </div>
  )
}

export default Register