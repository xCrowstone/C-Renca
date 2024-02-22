import '../footer/footer.css'
import logo from '../img/logo_renca-removebg.png'
import React from 'react';

const Footer = () => {
  return (
    <div className="footer mt-5 position-relative">
      <div className="container-fluid position-absolute bottom-0 end-0">
        <div className="row ">
          <footer className="footer text-dark">
              <div className="row">
                <div className="col-md-5 align-self-end">
                  <p className="texto-footer">© 2024 Ilustre Municipalidad de Renca</p>
                </div>
                <div className="col-md-5 align-self-end">
                  <p>Contacto:<a href="mailto:equipo_1@email.com">equipo_1@email.com</a></p>
                </div>
                <div className="col-md-2 sticky-bottom">
                  <div className="logo-renca">
                    <img src={logo} alt="Logo color renca" />
                  </div>
                </div>
              </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;