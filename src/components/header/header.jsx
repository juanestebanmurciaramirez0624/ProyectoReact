import './header.css'

export default function Header(){
    return(
    <nav className='nav-header'>
    <i className="fas fa-bars"></i>
    <form action="#">
        <div className="form-header">
        <input type="search" placeholder="Buscar..." />
        <button type="submit">
            <i className="fas fa-magnifying-glass" />
        </button>
        </div>
    </form>
    <input type="checkbox" id="theme-togle" hidden />
    <label className="theme-togle" />
    </nav>

    )
}