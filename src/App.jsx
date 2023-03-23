import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import RegistrationPage from './pages/auth/register'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <main>
      <RegistrationPage />
    </main>
  )
}

export default App
