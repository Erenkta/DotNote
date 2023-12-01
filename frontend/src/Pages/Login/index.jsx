import person from "./assets/person.png"
import "./login.css"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import google from  "./assets/google.svg"

import { useTranslation } from "react-i18next"


export default function LoginPage() {
  const {t} = useTranslation()
  return (
    <div className="form-container">
      <h1>{t("Login")}</h1>
      <div className="signup-box">
        <div className="left-box">
          <input type="text" className="input-box" placeholder={t("Your Email")}/>
          <input type ="password" className="input-box" placeholder={t("Your Password")}/>
          <input type="checkbox" id="rememberme"/>
          <label htmlFor="rememberme">{t("Remember me")}</label>
          <button type="submit">{t("Login")} <img src={person}/> </button>
        </div>
        <div className="right-box">
          <a href="" className="go-link" ><img src={google} alt="google"/>{t("Login with Google")}</a>
          <a href="" className="tw-link"><img src={twitter} alt="twitter"/>{t("Login with Twitter")}</a>
          <a href="" className="fb-link"><img src={facebook} alt="facebook"/>{t("Login with Facebook")}</a>
        </div>
      </div>
    </div>
  );
}
