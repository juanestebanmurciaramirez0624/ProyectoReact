import './index.css'
import logo from '../../assets/img/logo.png'
import { useState } from 'react'
import Modal from '../modal/modal'
import Signup from '../signup/signUp'
import Login from '../login/login'
import { Toaster } from 'sonner'

export default function Index(){
    const [isModalOpenLogin, setisModalOpenLogin] = useState(false)
    const [isModalOpenSignUp, setisModalOpenSignUp] = useState(false)
    return (
        <div>
  <section className="header-index">
    <nav>
      <a href="index" className='logo'><img src={logo} alt="Logo" />Servi<span className="text-logo">Plus</span></a>
      <div className="nav-links" id="navLinks">
        <i className="fa-solid fa-xmark" />
      </div>
      <i className="fa-solid fa-bars" />
    </nav>
    <div className="content-tex-box">
      <div className="text-box">
        <h1>SERVIPLUS - TICKETS DE SERVICIO AL CLIENTE</h1>
        <p>Somos tu aliado para una gestión eficiente de tickets de servicio al cliente. 
          Simplificamos la comunicación entre tu empresa y tus clientes, ayudándote a brindar 
          un servicio más rápido y personalizado. Nuestro objetivo es mejorar la satisfacción 
          del cliente y la eficiencia operativa, permitiéndote rastrear problemas, asignar 
          tareas y generar informes. ¡Con nosotros, la gestión de tickets es pan comido!</p>
      </div>
        <button className="hero-btn" onClick={() => setisModalOpenLogin(true)}>Login</button>
        <button className="hero-btn" onClick={() => setisModalOpenSignUp(true)}>Registro</button>
    </div>
  </section>
  <Toaster richColors visibleToasts={1} theme='dark'/>
  <Modal isOpen={isModalOpenLogin} closeModal={() => setisModalOpenLogin(false)} title='Login'>
    <Login />
  </Modal>
  <Modal isOpen={isModalOpenSignUp} closeModal={() => setisModalOpenSignUp(false)} title='Registro de Usuario'>
    <Signup />
  </Modal>
</div>
    )
}