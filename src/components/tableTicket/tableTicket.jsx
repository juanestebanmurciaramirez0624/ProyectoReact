import { useEffect, useState } from 'react'
import '../table/table.css'
import Modal from '../modal/modal'
import RegisterTicket from '../registerTicket/registerTicket'
import { useTicket } from '../../context/ticketContext'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Toaster } from 'sonner';

export default function TableTicket(){
    const [isModalOpenRegisterTicket, setisModalOpenRegisterTicket] = useState(false)
    const { getTickets, isTicket, deleteTicket, getTicketsProfile } = useTicket()
    const params = useParams()
    let modalTitle = 'Registro de Ticktes'
    let location = useLocation()

    if (params.id){
      modalTitle = 'Actualizar Ticktes'
    }
    
    useEffect(() =>{
      if (location.pathname === '/ticket'){
        getTickets()
      } else if (location.pathname === '/ticketProfile') {
        getTicketsProfile()
      }
    },[])

    return(
        <div className="containter-table">
        <div className="crud-table">
            <div className="header-table">
              <div>
                <h3>Tabla Tickets</h3>
              </div>
              <a className= "open-modal" onClick={() => setisModalOpenRegisterTicket(true)}>Registro</a>
            </div>
            <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Nombre</th>
                    <th>Asunto</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Servcio</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
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
                          <td>{isTicket.state}</td>
                          <td>{isTicket.service.name}</td>
                          <td><NavLink to={`/ticket/${isTicket._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterTicket(true)}>Modificar</NavLink></td> 
                          <td><a className='buttons delete-button' onClick={() => {
                            deleteTicket(isTicket._id)
                          }}>Eliminar</a></td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
        <Toaster richColors/>
        <Modal isOpen={isModalOpenRegisterTicket} closeModal={() => setisModalOpenRegisterTicket(false)} title={modalTitle}>
          <RegisterTicket />
        </Modal>
        </div>
    )
}