import "./home.css"
import { useNavigate } from "react-router-dom";


export default function Home() {
  let navigate = useNavigate()
  const gotoSignup = () =>{
    let path = "/signup"
    navigate(path)
  }

  return (
    <div className="banner">
      <div className="content">
        <h1>What is DotNote ? </h1>
        <p>DotNote is a website that you can store your notes, todos and daily reminders.</p>
      </div>
      <div className="content">
        <h1>Why we should use Dotnote</h1>
        <p>Because of user friendly UI , simple usage and its better that paper !</p>
      </div>
      <button onClick={gotoSignup}>Get Started</button>
    </div>
    
  )
}
