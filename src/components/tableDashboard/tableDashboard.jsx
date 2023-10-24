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
          <a className="btn">Ver todo</a>
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
          <a className="btn">Ver todo</a>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                user.fullName
              </td>
              <td>
                user.phone
              </td>
              <td>
                user.role
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
