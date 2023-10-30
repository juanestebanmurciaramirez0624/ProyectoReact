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


function App() {
  return (
    <AuthProvider>
          <DarkModeProvider>
            <NavbarProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<IndexPage />}></Route>
                  <Route path='/dashboard' element={<DashboardPage />}></Route>
                  <Route path='/inbox' element={<InboxPage />}></Route>
                  <Route path='/user' element={<UserPage />}></Route>
                  <Route path='/ticket' element={<TicketPage />}></Route>
                  <Route path='/service' element={<ServicePage />}></Route>
                </Routes>
              </BrowserRouter>
            </NavbarProvider>
    </DarkModeProvider>
    </AuthProvider>
  )
}

export default App
