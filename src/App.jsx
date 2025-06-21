import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
import Banner from './Component/Banner'

function App() {
  

  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default App
