import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App; 
