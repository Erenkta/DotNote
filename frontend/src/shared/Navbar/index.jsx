
import { useState } from "react"
import "./navbar.css"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
//Localization
import { useTranslation } from "react-i18next"
import LangSelector from "../../shared/LanguageSelector"



export default function Navbar() {

  //Localization
  const {t} = useTranslation();
  
  const [menuState,setMenuState] = useState(false)
  return (
    <nav>
      <Link to="/" className="title" >
        <img className="logo" src={logo} />
        </Link>
        
      <div className="menu" onClick={()=>{setMenuState(!menuState)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuState == true ? "open" : ""} >
      <div className="lang-selector"><LangSelector></LangSelector></div>
        <li> <NavLink to="/about">{t("About")}</NavLink> </li>
        <li> <NavLink to="/login">{t("Login")}</NavLink>  </li>
        <li > <NavLink to="/signup">{t("Sign Up")}</NavLink> </li>

      </ul>
    </nav>

  )
}
