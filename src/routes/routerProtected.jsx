import {Outlet, Navigate} from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider';

export default function RouterProtected(){
    const auth = useAuth()

    return auth.isAuthenticated ? <Outlet/> : <Navigate to = '/index'/>;

}