
import '../header/header.css'
import logo from '../img/logo_color_renca.png'
import icono1 from '../img/phone.png'
import icono2 from '../img/email.png'
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          {/* Primera columna */}
          <div className="col-md">
                <div className="logo-color-renca"> 
                  <img src={logo} alt="Logo color renca" />
            </div>
          </div>

          {/* Segunda columna */}
          <div className="col-md text-center">
                <h5 className="card-title">logo aplicacion</h5>
          </div>

          {/* Tercera columna */}
          <div className="col-md text-end">
                <p className="texto-header"> <img src={icono1} alt="logo telefono" /> +56 2 2685 6600</p>
                <p className="texto-header"><img src={icono2} alt="logo correo" />contacto@renca.cl</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
