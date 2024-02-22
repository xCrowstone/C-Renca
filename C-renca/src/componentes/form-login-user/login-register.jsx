import React, { useState } from 'react';
import '../form-login-user/login.css'

const AuthComponent = () => {
  const [isRegister, setIsRegister] = useState(true);

  const handleSignInClick = () => {
    setIsRegister(false);
  };

  const handleSignUpClick = () => {
    setIsRegister(true);
  };

  return (
    <div className='container-autentic'>
    <div className={`container-form ${isRegister ? 'register' : 'login'}`}>
      <div className="information">
        <div className="info-childs">
          <h2>{isRegister ? 'Bienvenido Regístrate' : 'Bienvenido Nuevamente'}</h2>
          <p>texto de bienvenida</p>
          <input type="button" value={isRegister ? 'Iniciar sesión' : 'Registrarse'} onClick={isRegister ? handleSignInClick : handleSignUpClick} />
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>{isRegister ? 'Crear una Cuenta' : 'Iniciar Sesión'}</h2>
          <form className={`form ${isRegister ? 'register' : 'login'}`}>
            {isRegister && (
              <label>
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Nombres Completos" />
              </label>
            )}
            <label>
              <i className='bx bxs-envelope'></i>
              <input type="email" placeholder="correo electrónico" />
            </label>
            <label>
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="contraseña" />
            </label>
            {!isRegister && (
              <div className="row">
                <div className="col-sm">
                  <label htmlFor="">
                    <input type="checkbox" /> Recuérdame
                  </label>
                </div>
                <div className="col-sm">
                  <div className="forget">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                </div>
              </div>
            )}
            <input type="submit" value={isRegister ? 'Registrarse' : 'Iniciar sesión'} />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthComponent;
