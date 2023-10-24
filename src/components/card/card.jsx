import './card.css'

export default function Card(){
    return(
    <ul className="cards">
    <li>
        <i className="fas fa-envelope" />
        <span className="info">
        <h3>
            457810
        </h3>
        <p>Mensajes</p>
        </span>
    </li>
    <li>
        <i className="fas fa-ticket" />
        <span className="info">
        <h3>
            48
        </h3>
        <p>Tickets</p>
        </span>
    </li>
    <li>
        <i className="fas fa-user" />
        <span className="info">
        <h3>
            125462
        </h3>
        <p>Clientes</p>
        </span>
    </li>
    <li>
        <i className="fas fa-briefcase" />
        <span className="info">
        <h3>
            10
        </h3>
        <p>Servicios</p>
        </span>
    </li>
    </ul>

    )
}