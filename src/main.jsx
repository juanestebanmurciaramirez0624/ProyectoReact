import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import RouterProtected from './routes/routerProtected'
import { AuthProvider } from './auth/AuthProvider'
import Index from './components/index'
import Navbar from './components/navbar/navbar'

const router = createBrowserRouter([
  {
    path: "/index",
    element: <Index />
  },
  {
    path: "/pruebas",
    element: <Navbar />
  },
  {
    path: "/",
    element: <RouterProtected />,
    children: [{
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
