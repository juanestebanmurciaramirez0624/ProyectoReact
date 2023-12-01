import { useEffect, useState } from 'react'
import '../table/table.css'
import Modal from '../modal/modal'
import RegisterTicket from '../registerTicket/registerTicket'
import { useTicket } from '../../context/ticketContext'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Toaster } from 'sonner'
import { format } from 'date-fns'
import { useAuht } from '../../context/authContext'
import Chat from '../chat/chat'

export default function TableTicket(){
    const [isModalOpenRegisterTicket, setisModalOpenRegisterTicket] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const { getTickets, isTicket, deleteTicket, getTicketsProfile } = useTicket()
    const { isUser } = useAuht()
    const params = useParams()
    let modalTitle = 'Registro de Ticktes'
    let location = useLocation()
    let title = 'Ticket'

  if (location.pathname == '/ticket') {
    title = 'Mensaje'
  }

    if (params.id){
      modalTitle = 'Actualizar Ticktes'
    }
    
    function tableTickets () {
      getTickets()
    }

    useEffect(() =>{
      if (location.pathname === '/ticket'){
        tableTickets()
      } else if (location.pathname === '/ticketProfile') {
        getTicketsProfile()
      }
    }, [])

    return(
        <div className="containter-table">
        <div className="crud-table">
            <div className="header-table">
              <div>
                <h3>Tabla {title}</h3>
              </div>
              {(isUser.rol.includes('Administrador') || isUser.rol.includes('Cliente')) && (
                <a className= "open-modal" onClick={() => setisModalOpenRegisterTicket(true)}>Registrar</a>
              )}
            </div>
            <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Nombre</th>
                    <th>Asunto</th>
                    <th>Descripcion</th>
                    <th>Servcio</th>
                    <th>Fecha</th>
                    <th>Modificar</th>
                    {(isUser.rol.includes('Administrador')) && (
                      <th>Eliminar</th>
                    )}
                    <th>Chat</th>
                </tr>
                </thead>
                <tbody>
                    {
                      isTicket.map(isTicket => (
                        <tr key={isTicket._id}>
                          <td>{isTicket.user.fullName}</td>
                          <td>{isTicket.name}</td>
                          <td>{isTicket.subject}</td>
                          <td>{isTicket.description}</td>
                          <td>{isTicket.service.name}</td>
                          <td>{format(new Date(isTicket.date), 'dd/MM/yyyy')}</td>
                          <td><NavLink to={`/ticket/${isTicket._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterTicket(true)}>Modificar</NavLink></td> 
                          {(isUser.rol.includes('Administrador')) && (
                            <td><a className='buttons delete-button' onClick={() => { deleteTicket(isTicket._id)}}>Eliminar</a></td>
                          )}
                          <td><NavLink to={`/ticket/${isTicket._id}`} className='buttons chat-button' onClick={() => setIsChatOpen(true)}>Chat</NavLink></td> 
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
        <Toaster richColors theme='dark'/>
        <Modal isOpen={isModalOpenRegisterTicket} closeModal={() => setisModalOpenRegisterTicket(false)} title={modalTitle}>
          <RegisterTicket updateTickets={ tableTickets } />
        </Modal>
        <Chat isOpenChat={isChatOpen} closeChat={() => setIsChatOpen(false)} />
        </div>
    )
}