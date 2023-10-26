import { useDarkMode } from '../../context/darkModeContext'
import { useNavbar } from '../../context/navbar'
import './header.css'

export default function Header(){
    const {DarkMode} = useDarkMode()
    const {Navbar} = useNavbar()

    return(
    <nav className='nav-header'>
    <i className="fas fa-bars" onClick={Navbar}></i>
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
        </nav>

    )
}