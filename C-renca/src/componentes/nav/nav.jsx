import React from 'react';
import '../nav/nav.css'

const Nav = () => {
  return (

<nav className="navbar ">
        
          <button className="navbar-toggler order-0" type="button" onClick={() => window.history.back()} aria-label="Back">
            <span><i className='bx bx-arrow-back bx-mb'></i></span>
          </button>
          <a className="navbar-brand mx-auto" href="#">CV Renca</a>
        
      </nav>

);
};

export default Nav;