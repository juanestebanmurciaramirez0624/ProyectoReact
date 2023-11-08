import { useEffect, useState } from 'react'
import { useUser } from '../../context/userContext'
import './table.css'
import { NavLink } from 'react-router-dom'
import Modal from '../modal/modal'
import SignUp from '../signup/signup'

export default function Table(){
    const [isModalOpenRegisterUser, setisModalOpenRegisterUser] = useState(false)
    const { getUsers, isUser, deleteUser } = useUser()

    useEffect(() =>{
      getUsers()
    },[])

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
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    {
                        isUser.map(isUser => (
                            <tr key={isUser._id}>
                                <td>{isUser.fullName}</td>
                                <td>{isUser.documentType}</td>
                                <td>{isUser.documentNumber}</td>
                                <td>{isUser.email}</td>
                                <td><NavLink to={`/user/${isUser._id}`} className='buttons update-button' onClick={() => setisModalOpenRegisterUser(true)}>Modificar</NavLink></td>  
                                <td><a className='buttons delete-button' onClick={() => {
                                deleteUser(isUser._id)
                                }}>Eliminar</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <Modal isOpen={isModalOpenRegisterUser} closeModal={() => setisModalOpenRegisterUser(false)} title='Registro de Users'>
          <SignUp />
        </Modal>
        </div>
    )
}