
import "./signup.css";
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import google from  "./assets/google.svg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import { signup as kayit } from "./api";

//Localization
import { useTranslation } from "react-i18next";
//Toastify import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [name,setName] = useState("");
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [termsAndConditions,setTermsAndConditions] = useState(false)
  const navigate = useNavigate();
  const [validationErrors,setValidationErrors] = useState({})

  const {t} = useTranslation();
  let lang = localStorage.getItem("lang")

  useEffect(()=>{
    setValidationErrors((lastErrors)=>{
      return{
        ...lastErrors,
        name:undefined
      }
    })
  },[name])

  useEffect(()=>{
    setValidationErrors((lastErrors)=>{
      return{
        ...lastErrors,
        username:undefined
      }
    })
  },[username])

  useEffect(()=>{
    setValidationErrors((lastErrors)=>{
      return{
        ...lastErrors,
        email:undefined
      }
    })
  },[email])

  useEffect(()=>{
    setValidationErrors((lastErrors)=>{
      return{
        ...lastErrors,
        password:undefined
      }
    })
  },[password])


  const showToast = (message,status) =>{
    if(status == "OK"){
      toast.success(message,{
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:1000
      })
    }else{
      toast.error(message,{
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:3000
      })
    }

  }


  const signup = async (event) =>{
    event.preventDefault();
    const user = {
      name,
      username,
      email,
      password
    }
    lang === "en" ? lang = lang+"_EN" : lang
    console.log(lang);
    try{
      const response  = await kayit(user,lang)
      //console.log(response);
      if(response.statusText === 'OK'){
        showToast(response.data.message,response.statusText)
        setTimeout(()=>{
          let path = "/login"
          navigate(path)
        },2000)
      }
    }catch(e){
      console.log(e);
      showToast(e.response.data.message,e.response.statusText)
      setValidationErrors(e.response.data.validationErrors)
    }
    

  }


  return (
    <div className="form-container">
      <h1> {t("Create An Account")}</h1>
      <div className="signup-box">
        <div className="left-box">
          <form >
            <Input type={"text"} error={validationErrors.name} onChange={(event)=>{setName(event.target.value);console.log(event.target);}} title={t("Your Name")}></Input>
            <Input type={"text"} error={validationErrors.username} onChange={(event)=>{setUsername(event.target.value)}}  title={t("Your Username")} />
            <Input type={"text"} error={validationErrors.email} onChange={(event)=>{setEmail(event.target.value)}} title={t("Your Email")} />
            <Input type={"password"} error={validationErrors.password} onChange={(event)=>{setPassword(event.target.value)}} title={t("Create Password")}/>
            <input type="checkbox" onClick={()=>{setTermsAndConditions(!termsAndConditions)}} id="terms"/>
            <label htmlFor="terms">{t("Terms")}</label>

            <button onClick={()=>{signup(event)}} disabled={!termsAndConditions}>{t("Sign Up")}<span>&#x2192;</span></button>
            <ToastContainer />
          </form>
        </div>
        <div className="right-box">
          <a href="" className="go-link" ><img src={google} alt="google"/>{t("Connect with Google")}</a>
          <a href="" className="tw-link"><img src={twitter} alt="twitter"/>{t("Connect with Twitter")}</a>
          <a href="" className="fb-link"><img src={facebook} alt="facebook"/>{t("Connect with Facebook")}</a>
        </div>
      </div>
      <p className="login-msg">{t("AlreadySign")} <Link to="/login">{t("Login Now")}</Link></p>
    </div>
  );
}
