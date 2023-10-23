import './navbar.css'
import logo from '../../assets/img/logo.png'

export default function Navbar(){
    return(
<div className="navbar">
  <a>
    <div className="logo-content">
      <img src={logo} alt="logo" className='logo' />
      <div className="logo-name">
        <span>Servi</span><span className="color-i">Plus</span>
      </div>
    </div>
  </a>
  <ul className="menu">
    <li><a> <i className="fas fa-house" /> Dashboard</a></li>
    <li><a> <i className="fas fa-user" /> Usuarios</a></li>
    <li><a> <i className="fas fa-cookie-bite" /> Refrigerios</a></li>
    <li><a> <i className="fas fa-graduation-cap" /> Cursos</a></li>
    <li><a> <i className="fas fa-pen-to-square" /> Asiganaciones</a></li>
    <li><a> <i className="fas fa-question" /> Ayuda</a></li>
  </ul>
  <ul className="menu">
    <li>
      <a className="logout" > 
        <i className="fas fa-arrow-right-from-bracket fa-rotate-180" /> Salir
      </a>
    </li>
  </ul>
</div>
    )
}