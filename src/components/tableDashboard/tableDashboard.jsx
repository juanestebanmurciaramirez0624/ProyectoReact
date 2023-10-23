import "./tableDashboard.css";

export default function TableDashboard() {
  return (
    <div className="content-table">
      <div className="table-course">
        <div className="header">
          <i className="fa-solid fa-user" />
          <h3>Tabla Cursos</h3>
          <span />
          <a className="btn">Ver todo</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>sede</th>
              <th>Numero de estudiantes</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                course.name 
              </td>
              <td>
                course.campus 
              </td>
              <td>
                course.numberStudents
              </td>
              <td>
               course.director
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-user">
        <div className="header">
          <i className="fa-solid fa-graduation-cap" />
          <h3>Tabla Usuarios</h3>
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
