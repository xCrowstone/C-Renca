import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/footer/footer.jsx'
import Header  from './componentes/header/header.jsx'
import './index.css'
import Nav from './componentes/nav/nav.jsx'
import Seleccion from './componentes/form-seleccion/seleccion.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Seleccion/>
    <Footer />
  </React.StrictMode>,
)