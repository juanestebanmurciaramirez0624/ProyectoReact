import { useEffect, useState } from 'react'
import { useUser } from '../../context/userContext'
import './table.css'
import { NavLink, useParams } from 'react-router-dom'
import Modal from '../modal/modal'
import SignUp from '../signup/signUp'
import { Toaster } from 'sonner'
import { useAuht } from '../../context/authContext'

export default function Table(){
    const [isModalOpenRegisterUser, setisModalOpenRegisterUser] = useState(false)
    const { getUsers, isUsers, deleteUser } = useUser()
    const { isUser } = useAuht()
    const params = useParams()

    console.log(isUser)
    useEffect(() =>{
      getUsers()
    },[])

    
    var modalTitle = 'Registro de Usuario'

    if (params.id){
      modalTitle = 'Actualizar Usuario'
    }

    return(
        <div className="containter-table">
        <div className="crud-table">
            <div className="header-table">
              <div>
                <h3>Tabla Usuarios</h3>
              </div>
                <span></span>
            </div>
            <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo Documento</th>
                    <th>Numero Documento</th>
                    <th>Correo</th>
                    <th>Rol</th>
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
                        isUsers.map(isUsers => (
                            <tr key={isUsers._id}>
                                <td>{isUsers.fullName}</td>
                                <td>{isUsers.documentType}</td>
                                <td>{isUsers.documentNumber}</td>
                                <td>{isUsers.email}</td>
                                <td>{isUsers.rol}</td>
                                {(isUser.rol.includes('Administrador')) && (
                                  <>
                                    <td><NavLink to={`/user/${isUsers._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterUser(true)}>Modificar</NavLink></td>  
                                    <td><a className='buttons delete-button' onClick={() => {deleteUser(isUsers._id)}}>Eliminar</a></td>
                                  </>
                                )}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <Toaster richColors/>
        <Modal isOpen={isModalOpenRegisterUser} closeModal={() => setisModalOpenRegisterUser(false)} title={modalTitle}>
          <SignUp />
        </Modal>
        </div>
    )
}