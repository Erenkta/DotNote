import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/hoaxify.png";
import { useDispatch, useSelector, useStore } from "react-redux";
import { logoutSuccess } from "@/pages/redux/store";
import { loadToken } from "@/pages/redux/storage";


export function NavBar() {
  const { t } = useTranslation();
  const authState = useSelector((store)=>store.auth)
  const dispatch = useDispatch()
  console.log(authState.id);

  const onClickLogout = () =>{
    dispatch(logoutSuccess())
    console.log("deneme");
  }
  return (
    <nav className="navbar shadow-sm navbar-light navbar-expand bg-light">
      <div className="container-fluid">
        <Link to="/" class="navbar-brand" href="#">
          <img width={60} src={logo}></img>
          Hoaxify
        </Link>
        { authState.id === 0 && 
        (
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              {t("Login")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              {t("Sign Up")}
            </Link>
          </li>
        </ul>
        )}

        { authState.id !== 0 && 
        (
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={`/user/${authState.id}`} className="nav-link" onClick={()=>{console.log(loadToken())}}>
              {t("My Profile")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={onClickLogout}>
              {t("Logout")}
            </Link>
          </li>
        </ul>
        )}
      </div>
    </nav>
  );
}
