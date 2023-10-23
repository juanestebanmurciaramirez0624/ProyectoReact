import './headerMain.css'

export default function HeaderMain(){
    return(
        <div className="header">
        <div className="left">
            <h1>pageTitle</h1>
            <ul className="breadcrumb">
            <li>
                <a href="#" className='welcome'>
                Bienvenido
                </a>
            </li> /
            <li>
                <a className="nameuser">
               username
                </a>
            </li>
            </ul>
        </div>
        </div>
    )
}