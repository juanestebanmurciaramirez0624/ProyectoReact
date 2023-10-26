export default function Table(){
    return(
        <div className="content-table">
        <div className="table">
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
                    <th>Género</th>
                    <th>Tipo de documento</th>
                    <th>Documento</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Rol</th>
                    <th>Nombre de usuario</th> 
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>fullName</td>
                        <td> gender </td>
                        <td> typeDocument</td>
                        <td> document</td>
                        <td> phone</td>
                        <td> email</td>
                        <td> address</td>
                        <td> role</td>
                        <td> username</td>
                        <td><app-modify-user></app-modify-user></td> 
                        <td><app-delete-user></app-delete-user></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}