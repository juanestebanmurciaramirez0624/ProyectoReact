import { useService } from '../../context/serviceContext'
import { useTicket } from '../../context/ticketContext'
import { useUser } from '../../context/userContext'
import './card.css'

export default function Card(){
    const { isTicket } = useTicket()
    const { isUser } = useUser()
    const { isService } = useService()

    return(
    <ul className="cards">
    <li>
        <i className="fas fa-envelope" />
        <span className="info">
        <h3>
        </h3>
        <p>Mensajes</p>
        </span>
    </li>
    <li>
        <i className="fas fa-ticket" />
        <span className="info">
        <h3>{isTicket.length}</h3>
        <p>Tickets</p>
        </span>
    </li>
    <li>
        <i className="fas fa-user" />
        <span className="info">
        <h3>{isUser.length}</h3>
        <p>Clientes</p>
        </span>
    </li>
    <li>
        <i className="fas fa-briefcase" />
        <span className="info">
        <h3>{isService.length}</h3>
        <p>Servicios</p>
        </span>
    </li>
    </ul>

    )
}