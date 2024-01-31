import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/sidebar'
import Navbar from './Components/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Sidebar />
    </>
  )
}

export default App
