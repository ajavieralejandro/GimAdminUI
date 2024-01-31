import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/sidebar'
import Navbar from './Components/navbar'
import Clients from './Components/Clients/clients'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />  
    <Sidebar >
      <Clients />
    </Sidebar>
    </>
  )
}

export default App
