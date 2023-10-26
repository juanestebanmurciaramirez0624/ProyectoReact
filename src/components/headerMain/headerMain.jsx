import './headerMain.css'

// eslint-disable-next-line react/prop-types
export default function HeaderMain({ user, title }){
    return(
        <div className="header">
        <div className="left">
            <h1>{title}</h1>
            <ul className="breadcrumb">
            <li>
                <p className='welcome'>
                Bienvenido
                </p>
            </li> <span className='verticalBar'> / </span> 
            <li>
                <p className="nameuser"> {user} </p>
            </li>
            </ul>
        </div>
        </div>
    )
}