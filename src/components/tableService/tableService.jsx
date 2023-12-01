import { useEffect, useState } from 'react'
import '../table/table.css'
import Modal from '../modal/modal'
import RegisterService from '../registerService/registerService'
import { useService } from '../../context/serviceContext'
import { NavLink, useParams } from 'react-router-dom'
import { useAuht } from '../../context/authContext'

export default function TableService(){
    const [isModalOpenRegisterService, setisModalOpenRegisterService] = useState(false)
    const { getServices, isService, deleteService } = useService()
    const params = useParams()
    const { isUser } = useAuht()

    useEffect(() =>{
      getServices()
    },[])

    var modalTitle = 'Registro de Servicios'

    if (params.id){
      modalTitle = 'Actualizar Servicio'
    }

    return(
        <div className="containter-table">
        <div className="crud-table">
            <div className="header-table">
              <div>
                <h3>Tabla Servicio</h3>
              </div>
              {(isUser.rol.includes('Administrador')) && (
                <a className= "open-modal" onClick={() => setisModalOpenRegisterService(true)}>Registrar</a>
              )}
            </div>
            <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    {(isUser.rol.includes('Administrador')) && (
                      <>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                      </>
                    )}
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
                          {(isUser.rol.includes('Administrador')) && (
                            <>
                              <td><NavLink to={`/service/${isService._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterService(true)}>Modificar</NavLink></td>  
                              <td><a className='buttons delete-button' onClick={() => {deleteService(isService._id)}}>Eliminar</a></td>
                            </>  
                          )}
                          </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
        <Modal isOpen={isModalOpenRegisterService} closeModal={() => setisModalOpenRegisterService(false)} title={modalTitle}>
          <RegisterService />
        </Modal>
        </div>
    )
}