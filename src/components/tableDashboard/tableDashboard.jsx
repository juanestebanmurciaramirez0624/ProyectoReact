import { useEffect, useState } from "react";
import "./tableDashboard.css";
import Chat from '../chat/chat'
import { useTicket } from "../../context/ticketContext";

export default function TableDashboard() {
  const { getTickets, isTicket } = useTicket()
  const [isChatOpen, setIsChatOpen] = useState(false)
  useEffect(() =>{
    getTickets()
  },[])
  return (
    <div className="content-table">
      <div className="content-inbox">
        <div className="table-header">
          <div className="title-dashboard">
          <i className="fas fa-envelope" />
          <h3>Bandeja de entrada</h3>
          </div>
          <span />
        </div>
        <ul className="inbox">
          <li className="show" onClick={() => setIsChatOpen(true)}>
            <div className="title-inbox">
            <i className="fas fa-check"></i>
            <p>Mensaje</p>
            </div>
          </li>
          <li className="no-show">
            <div className="title-inbox">
            <i className="fas fa-x"></i>
            <p>Mensaje</p>
            </div>
          </li>
          <Chat isOpenChat={isChatOpen} closeChat={() => setIsChatOpen(false)} />
          <li className="no-show">
            <div className="title-inbox">
            <i className="fas fa-x"></i>
            <p>Mensaje</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="table-dashboard">
        <div className="table-header">
        <div className="title-dashboard">
          <i className="fas fa-ticket" />
          <h3>Tabla Tickets</h3>
          </div>
          <span />
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Asunto</th>
              <th>Descripcion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              isTicket.slice(0, 4).map(isTicket => (
              <tr key={isTicket._id}>
                <td>{isTicket.name}</td>
                <td>{isTicket.subject}</td>
                <td>{isTicket.description}</td>
                <td>{isTicket.state}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
