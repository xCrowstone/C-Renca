import React from 'react';
import './card.css';
import fotoGastro from '../img/fotoGastronomia.jpg'


const Tarjetas = () => {
  return (
    <>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="num"></div>
          <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{ '--bg-img': url('/img/fotoGastronomia.jpg') }}>
            <div>
              <h1>GASTRONOMIA</h1>
              <p>text descriptivo sobre la ruta. text descriptivo sobre la ruta…</p>
              <div className="date"></div>
              <div className="tags">
                <div className="tag">LEER MAS</div>
              </div>
            </div>
          </a>
        </div>
        
        {/* https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 */}
      </section>
    </>
  );
};

export default Tarjetas;