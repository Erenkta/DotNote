
import { useState } from "react"
import "./navbar.css"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"


export default function Navbar() {
  
  const [menuState,setMenuState] = useState(false)
  return (
    <nav>
      <Link to="/" className="title" ><img className="logo" src={logo}/></Link>
      <div className="menu" onClick={()=>{setMenuState(!menuState)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuState == true ? "open" : ""} >
        <li> <NavLink to="/about">About</NavLink> </li>
        <li> <NavLink to="/login">Login</NavLink>  </li>
        <li > <NavLink to="/signup">Sign Up</NavLink> </li>
      </ul>
    </nav>

  )
}
