import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/footer/footer.jsx'
import Header  from './componentes/header/header.jsx'
import '../estilos/vistaLogin.css'
import AuthComponent from './componentes/form-login-user/login-register.jsx'
import Nav from './componentes/nav/nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <AuthComponent />
    <Footer />
  </React.StrictMode>,
)