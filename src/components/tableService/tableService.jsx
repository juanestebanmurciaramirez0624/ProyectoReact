import { useEffect, useState } from 'react'
import '../table/table.css'
import Modal from '../modal/modal'
import RegisterService from '../registerService/registerService'
import { useService } from '../../context/serviceContext'
import { NavLink } from 'react-router-dom'

export default function TableService(){
    const [isModalOpenRegisterService, setisModalOpenRegisterService] = useState(false)
    const { getServices, isService, deleteService } = useService()

    useEffect(() =>{
      getServices()
    },[])

    return(
        <div className="containter-table">
        <div className="crud-table">
            <div className="header-table">
              <div>
                <h3>Tabla Servicio</h3>
              </div>
              <a className= "open-modal" onClick={() => setisModalOpenRegisterService(true)}>Registro</a>
            </div>
            <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    {
                      isService.map(isService => (
                        <tr key={isService._id}>
                          <td>{isService.name}</td>
                          <td>{isService.description}</td>
                          <td>{isService.category}</td>
                          <td>{isService.price.$numberDecimal}</td>
                          <td><NavLink to={`/service/${isService._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterService(true)}>Modificar</NavLink></td>  
                          <td><a className='buttons delete-button' onClick={() => {
                          deleteService(isService._id)
                          }}>Eliminar</a></td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
        <Modal isOpen={isModalOpenRegisterService} closeModal={() => setisModalOpenRegisterService(false)} title='Registro de Services'>
          <RegisterService />
        </Modal>
        </div>
    )
}