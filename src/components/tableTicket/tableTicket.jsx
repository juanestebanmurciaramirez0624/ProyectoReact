import { useEffect, useState } from 'react'
import '../table/table.css'
import Modal from '../modal/modal'
import RegisterTicket from '../registerTicket/registerTicket'
import { useTicket } from '../../context/ticketContext'

export default function TableTicket(){
    const [isModalOpenRegisterTicket, setisModalOpenRegisterTicket] = useState(false)
    const { getTickets, isTicket } = useTicket()

    useEffect(() =>{
      getTickets()
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
                    <th>Nombre</th>
                    <th>descripcion</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    {
                      isTicket.map(isTicket => (
                        <tr key={isTicket._id}>
                          <td>{isTicket.name}</td>
                          <td>{isTicket.description}</td>
                          <td>Modificar</td> 
                          <td>Eliminar</td>
                        </tr>
                      ))
                    }

                </tbody>
            </table>
        </div>
        <Modal isOpen={isModalOpenRegisterTicket} closeModal={() => setisModalOpenRegisterTicket(false)} title='Registro de Tickets'>
          <RegisterTicket />
        </Modal>
        </div>
    )
}