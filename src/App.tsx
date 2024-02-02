import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/sidebar'
import Navbar from './Components/navbar'
import Clients from './Components/Clients/clients'
import LoginPage from './Pages/loginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage />
    </>
  )
}

export default App
