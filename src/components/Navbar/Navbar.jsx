import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar(){
    return(
        <div className="nav">
            <h1>K.</h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar