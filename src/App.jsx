
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'


function App() {


  return (
    <>
    
    <Navbar/>
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path='/projects' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App
