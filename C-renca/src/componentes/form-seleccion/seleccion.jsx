import React from 'react';
import '../form-seleccion/seleccion.css';

function Seleccion() {
  return (
    <div className="main">
  <div className="container-form register">
    <div className="information">
      <div className="info-childs">
        <h2>Ingresar como usuario</h2>
        <p>bienvenida nuevamente</p>
      </div>
    </div>
    <input type="button" value="Usuario" id="sign-in" />
  </div>

  <div className="container-forms login">
    <div className="informations">
      <div className="infos-childs">
        <h2>Ingresar como administrador</h2>
        <p>bienvenido nuevamente</p>
      </div>
    </div>
    <input type="button" value="Administrador" id="sign-up" />
  </div>
</div>
  );
}

export default Seleccion;
