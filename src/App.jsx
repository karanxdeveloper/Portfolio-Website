
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import { useEffect, useState } from 'react'


function App() {

  const [mode,setMode] = useState(true)

 
  useEffect(() => {
    document.body.style.backgroundColor = mode ? "#1a202c" : "#ffffff";
    document.body.style.color = mode ? "white" : "#000000";
  }, [mode]);

  return (
    <>
    
    <Navbar setMode={setMode} mode={mode}/>
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path='/projects' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App
