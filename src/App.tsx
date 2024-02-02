import { useState } from 'react'
import './App.css'
import AdminPage from './Pages/Admin/admin'
import LoginPage from './Pages/loginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdminPage />
    </>
  )
}

export default App
