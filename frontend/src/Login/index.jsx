import person from "./assets/person.png"
import "./login.css"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import google from  "./assets/google.svg"

export default function LoginPage() {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <div className="signup-box">
        <div className="left-box">
          <input type="text" className="input-box" placeholder="Enter your Email"/>
          <input type ="password" className="input-box" placeholder="Enter your Password"/>
          <input type="checkbox" id="rememberme"/>
          <label htmlFor="rememberme">Remember me for the next time</label>
          <button type="submit">Login <img src={person}/> </button>
        </div>
        <div className="right-box">
          <a className="go-link" ><img src={google} alt="google"/>Login with Google</a>
          <a className="tw-link"><img src={twitter} alt="twitter"/>Login with Twitter</a>
          <a className="fb-link"><img src={facebook} alt="facebook"/>Login with Facebook</a>
        </div>
      </div>
    </div>
  );
}
