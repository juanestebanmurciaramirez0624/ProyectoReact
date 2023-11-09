import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/indexPage'
import DashboardPage from './pages/dashboardPage'
import InboxPage from './pages/inboxPage'
import UserPage from './pages/userPage'
import TicketPage from './pages/ticketPage'
import ServicePage from './pages/servicePages'
import ProfilePage from './pages/profilePage'
import { DarkModeProvider } from './context/darkModeContext'
import { NavbarProvider } from './context/navbarContext'
import { AuthProvider } from './context/authContext'
import { TicketProvider } from './context/ticketContext'
import { UserProvider } from './context/userContext'
import { ServiceProvider } from './context/serviceContext'
import ProtectedRoute from './protectedRoute'
import './App.css'



function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <TicketProvider>
          <ServiceProvider>
            <DarkModeProvider>
              <NavbarProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<IndexPage />}></Route>
                    {/*Rutas Protegidas*/}
                    <Route element={<ProtectedRoute />}>
                    <Route path='/dashboard' element={<DashboardPage />}></Route>
                    <Route path='/profile/:id' element={<ProfilePage />}></Route>
                    <Route path='/inbox' element={<InboxPage />}></Route>
                    <Route path='/user' element={<UserPage />}></Route>
                    <Route path='/user/:id' element={<UserPage />}></Route>
                    <Route path='/ticket' element={<TicketPage />}></Route>
                    <Route path='/ticketProfile' element={<TicketPage />}></Route>
                    <Route path='/ticket/:id' element={<TicketPage />}></Route>
                    <Route path='/service' element={<ServicePage />}></Route>
                    <Route path='/service/:id' element={<ServicePage />}></Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </NavbarProvider>
            </DarkModeProvider>
          </ServiceProvider>
        </TicketProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
