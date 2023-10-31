import './navbar.css'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavbar } from '../../context/navbarContext'

export default function Navbar(){
  const { isNavbar } = useNavbar()

    return(
<div className={`navbar ${isNavbar ? 'close' : ''}`}>
  <a>
    <div className="logo-content">
      <img src={logo} alt="logo" className='logo' />
      <div className="logo-name">
        <span>Servi</span><span className="color-i">Plus</span>
      </div>
    </div>  
  </a>
  <ul className="menu">
    <li><NavLink to='/dashboard' className='a'> <i className="fas fa-house" /> Inicio</NavLink></li>
    <li><NavLink to='/user' className='a'> <i className="fas fa-user" /> Usuarios</NavLink></li>
    <li><NavLink to='/inbox' className='a'> <i className="fas fa-envelope" /> Mensajes</NavLink></li>
    <li><NavLink to='/ticket' className='a'> <i className="fas fa-ticket" /> Tickets</NavLink></li>
    <li><NavLink to='/service' className='a'> <i className="fas fa-briefcase" /> Servicios</NavLink></li>
    <li><NavLink to='/profile' className='a'> <i className="fas fa-briefcase" /> Servicios</NavLink></li>
  </ul>
  <ul className="menu">
    <li>
      <a className="logout a" > 
        <i className="fas fa-arrow-right-from-bracket fa-rotate-180" /> Salir
      </a>
    </li>
  </ul>
</div>
    )
}