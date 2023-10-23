import './card.css'

export default function Card(){
    return(
    <ul className="cards">
    <li>
        <i className="fas fa-user" />
        <span className="info">
        <h3>
            Usuarios
        </h3>
        <p>Modulo Usuarios</p>
        </span>
    </li>
    <li>
        <i className="fas fa-cookie-bite" />
        <span className="info">
        <h3>
            Refrigerios
        </h3>
        <p>Modulo Refrigerios</p>
        </span>
    </li>
    <li>
        <i className="fas fa-graduation-cap" />
        <span className="info">
        <h3>
            Cursos
        </h3>
        <p>Modulo Cursos</p>
        </span>
    </li>
    <li>
        <i className="fas fa-pen-to-square" />
        <span className="info">
        <h3>
            Asignar
        </h3>
        <p>Modulo Asignar</p>
        </span>
    </li>
    </ul>

    )
}