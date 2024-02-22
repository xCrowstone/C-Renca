import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../componentes/header/header.jsx'
import LoginAdmin from './componentes/form-login-admin/login-admin.jsx'
import Nav from '../componentes/nav/nav.jsx'
import Footer from '../componentes/footer/footer.jsx'
import '../estilos/vistaLoginAd.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Nav />
        <LoginAdmin />
        <Footer />
    </React.StrictMode>,
)