import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
import BlogsPage from './Component/BlogsPage'

function App() {
  

  return (
    <>
    <NavBar/>
    <Outlet/>
    
     
    </>
  )
}

export default App
