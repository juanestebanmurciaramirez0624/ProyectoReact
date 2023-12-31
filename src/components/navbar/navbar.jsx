import './navbar.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useNavbar } from '../../context/navbarContext';
import { useAuht } from '../../context/authContext';

export default function Navbar() {
  const { isNavbar } = useNavbar();
  const { logout, isUser } = useAuht();

  console.log('Roles del usuario:', isUser.rol);

  return (
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
        {(isUser.rol.includes('Empleado') || isUser.rol.includes('Administrador')) && (
          <li><NavLink to='/user' className='a'> <i className="fas fa-users" /> Usuarios</NavLink></li>
        )}
        {(isUser.rol.includes('Empleado') || isUser.rol.includes('Administrador')) && (
          <li><NavLink to='/ticket' className='a'> <i className="fas fa-ticket" /> Mensajes</NavLink></li>
        )}
        {(isUser.rol.includes('Cliente') || isUser.rol.includes('Administrador')) && (
          <li><NavLink to='/ticketProfile' className='a'> <i className="fas fa-ticket" /> Tickets</NavLink></li>
        )}    
        <li><NavLink to='/service' className='a'> <i className="fas fa-briefcase" /> Servicios</NavLink></li>
      </ul>
      <ul className="menu">
        <li>
          <NavLink className="logout a" to='/' onClick={() => {
            logout();
          }}> 
            <i className="fas fa-arrow-right-from-bracket fa-rotate-180" /> Salir
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
