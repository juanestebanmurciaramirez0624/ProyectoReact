import './table.css'

export default function Table(){
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
                    <th>Correo</th>
                    <th>Documento</th>
                    <th>Dirección</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> fullName </td>
                        <td> email</td>
                        <td> document</td>
                        <td> address</td>
                        <td> Modificar</td> 
                        <td> Eliminar</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}