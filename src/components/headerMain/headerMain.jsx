import { useAuht } from '../../context/authContext'
import { useLocation } from 'react-router-dom'
import './headerMain.css'
import { useEffect } from 'react'

export default function HeaderMain({ title }){
    const location = useLocation()
    const url = location.pathname

    const { isUser } = useAuht()
    useEffect(() => {
    })

    return(
        <div className="header">
        <div className="left">
            <h1>{title}</h1>
            {url === '/dashboard' && (
                <ul className="breadcrumb">
                    <li>
                        <p className='welcome'> Bienvenido </p>
                    </li> 
                    <span className='verticalBar'> / </span> 
                    <li>
                        <p className="nameuser"> {isUser.fullName} </p>
                    </li>
                </ul>
            )}
        </div>
        </div>
    )
}