import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/indexPage'
import DashboardPage from './pages/dashboardPage'
import InboxPage from './pages/inboxPage'
import UserPage from './pages/userPage'
import TicketPage from './pages/ticketPage'
import ServicePage from './pages/servicePages'
import { DarkModeProvider } from './context/darkModeContext'
import { NavbarProvider } from './context/navbarContext'
import './App.css'
import { AuthProvider } from './context/authContext'
import { TicketProvider } from './context/ticketContext'
import ProfilePage from './pages/profilePage'
import ProtectedRoute from './protectedRoute'


function App() {
  return (
    <AuthProvider>
        <TicketProvider>
          <DarkModeProvider>
            <NavbarProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<IndexPage />}></Route>
                  {/*Rutas Protegidas*/}
                  <Route element={<ProtectedRoute />}>
                  <Route path='/dashboard' element={<DashboardPage />}></Route>
                  <Route path='/profile' element={<ProfilePage />}></Route>
                  <Route path='/inbox' element={<InboxPage />}></Route>
                  <Route path='/user' element={<UserPage />}></Route>
                  <Route path='/ticket' element={<TicketPage />}></Route>
                  <Route path='/service' element={<ServicePage />}></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </NavbarProvider>
    </DarkModeProvider>
    </TicketProvider>
    </AuthProvider>
  )
}

export default App
