import { useState } from "react";
import "./tableDashboard.css";
import Chat from '../chat/chat'

export default function TableDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false)
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
              <th>Ticket</th>
              <th>Ticket</th>
              <th>Ticket</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> sapo </td>
              <td> sapo </td>
              <td> sapo </td>
              <td> sapo </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
