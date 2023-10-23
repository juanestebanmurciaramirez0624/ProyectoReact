import './index.css'
import logo from '../../assets/img/logo.png'
import { useState } from 'react'
import Modal from '../modal/modal'
import Signup from '../signup/signup'
import Login from '../login/login'

export default function Index(){
    const [isModalOpen1, setIsModalOpen1] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)
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
        <button label="Login" className="hero-btn" onClick={() => setIsModalOpen1(true)}>Login</button>
        <button label="Login" className="hero-btn" onClick={() => setIsModalOpen2(true)}>Registro</button>
    </div>
  </section>
  <Modal isOpen={isModalOpen1} closeModal={() => setIsModalOpen1(false)} title='Login'>
    <Login />
  </Modal>
  <Modal isOpen={isModalOpen2} closeModal={() => setIsModalOpen2(false)} title='Registro de Usuario'>
    <Signup />
  </Modal>
</div>
    )
}