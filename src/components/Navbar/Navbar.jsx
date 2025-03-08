import { Link } from "react-router-dom"
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import "./navbar.css"
import { useEffect, useState } from "react";

function Navbar({setMode, mode}){


    return(
        <div  className="nav">
            <h1> <Link className="font-bold" to="/">K.</Link></h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

            <div onClick={()=>setMode(!mode)}>
                {mode ?  <FaMoon />  : <FaSun /> }
            </div>
        </div>
    )
}

export default Navbar

{/* <FaMoon /> */}

{/* <FaSun /> */}