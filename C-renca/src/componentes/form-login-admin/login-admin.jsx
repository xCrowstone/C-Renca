// RegisterComponent.jsx
import React, {useState} from 'react';
import './login-admin.css'

const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  return (
    <div className="main">
      <div className="container-form login">
        <div className="information">
          <div className="info-childs">
            <h2>Bienvenido Administrador</h2>
            <p>texto de bienvenida</p>
          </div>
        </div>
        <div className="form-information">
          <div className="form-information-childs">
            <h2>Iniciar Sesión</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label>
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  placeholder="correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input type="submit" value="Iniciar sesión" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
