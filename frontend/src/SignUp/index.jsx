
import "./signup.css";
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import google from  "./assets/google.svg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./components/Input";
import { signup as kayit } from "./api";

export default function SignUp() {
  const [name,setName] = useState("");
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [termsAndConditions,setTermsAndConditions] = useState(false)
  const navigate = useNavigate();

  const signup = async (event) =>{
    event.preventDefault();
    const user = {
      name,
      username,
      email,
      password
    }

    let response = {}
    try{
       response  = await kayit(user)
      console.log(response);
    }catch(e){
      console.log(e);
    }
    
    if(response.statusText === 'OK'){
      let path = "/login"
      navigate(path)
    }else{
      alert("An error has occured")
    }
  }


  return (
    <div className="form-container">
      <h1> Create an account</h1>
      <div className="signup-box">
        <div className="left-box">
          <form >
            <Input type={"text"} onChange={(event)=>{setName(event.target.value)}} title={"Your Name"}></Input>
            <Input type={"text"} onChange={(event)=>{setUsername(event.target.value)}}  title={"Your Username"} />
            <Input type={"text"} onChange={(event)=>{setEmail(event.target.value)}} title={"Your Email"} />
            <Input type={"password"} onChange={(event)=>{setPassword(event.target.value)}} title={"Create password"}/>
            <input type="checkbox" onClick={()=>{setTermsAndConditions(!termsAndConditions)}} id="terms"/>
            <label htmlFor="terms">I accept terms & conditions</label>

            <button onClick={()=>{signup(event)}} disabled={!termsAndConditions}> Sign up <span>&#x2192;</span></button>
          </form>
        </div>
        <div className="right-box">
          <a href="" className="go-link" ><img src={google} alt="google"/>Connect with Google</a>
          <a href="" className="tw-link"><img src={twitter} alt="twitter"/>Connect with Twitter</a>
          <a href="" className="fb-link"><img src={facebook} alt="facebook"/>Connect with Facebook</a>
        </div>
      </div>
      <p className="login-msg"> I already have an account ? <Link to="/login">Login Now</Link></p>
    </div>
  );
}
