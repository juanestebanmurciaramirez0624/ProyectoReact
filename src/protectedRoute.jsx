import { Navigate, Outlet } from "react-router-dom"
import { useAuht } from "./context/authContext"

export default function ProtectedRoute() {
    const { isLoading, isAuthenticated } = useAuht()

    if(isLoading) return <p> cargando... </p>
    if(!isLoading && !isAuthenticated) return <Navigate to='/' replace />
    return <Outlet />
}