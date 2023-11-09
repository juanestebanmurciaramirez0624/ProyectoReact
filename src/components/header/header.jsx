import { Link } from 'react-router-dom'
import { useDarkMode } from '../../context/darkModeContext'
import { useNavbar } from '../../context/navbarContext'
import { useAuht } from '../../context/authContext'
import './header.css'

export default function Header(){
    const {DarkMode} = useDarkMode()
    const {Navbar} = useNavbar()
    const { isUser } = useAuht()

    return(
    <nav className='nav-header'>
    <i className="fas fa-bars" onClick={Navbar} />
    <form action="#">
        <div className="form-header">
        <input type="search" placeholder="Buscar..." />
        <button type="submit">
            <i className="fas fa-magnifying-glass" />
        </button>
        </div>
    </form>
    <input type="checkbox" id="theme-togle" hidden />
    <label className="theme-togle" htmlFor="theme-togle" onClick={DarkMode} />
    <Link to={`/profile/${isUser.id}`} > <i className="fas fa-circle-user profile" /></Link>
    </nav>
    )
}