import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/footer/footer.jsx'
import Header  from './componentes/header/header.jsx'
import './index.css'
import Nav from './componentes/nav/nav.jsx'
import Tarjetas from './componentes/cards/card.jsx'
import AuthComponent from './componentes/form-login-user/login-register.jsx'
import Carrusel from './componentes/carrusel/carrusel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <body>
    <Carrusel/>
    <Tarjetas/>
    <Footer />
    </body>
  </React.StrictMode>,
)