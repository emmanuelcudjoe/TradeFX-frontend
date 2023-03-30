import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/auth/login'
import RegistrationPage from './pages/auth/register'
import Home from './pages/Home'
import Providers from './pages/Providers'
import UserFX from './pages/UserFX'
import TradeProvider from './pages/Trade'
import { loader as homeLoader } from './pages/Home' 

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: "/register",
    Component: RegistrationPage,
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/providers",
    Component: Providers,
  },
  {
    path: "/provider/:providerName",
    Component: TradeProvider,
  },
  {
    path: "/my-fx-account",
    Component: UserFX
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
