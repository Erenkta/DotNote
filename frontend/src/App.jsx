import {Outlet } from "react-router-dom";

import { LanguageSelector } from "./shared/components/LanguageSelector";
import { NavBar } from "./shared/components/NavBar";
import { Provider } from "react-redux";
import { store } from "./pages/redux/store";


function App() {

  return (
    <>
    <Provider store={store}>
      <NavBar/>
      <div className="container mt-3">
      <Outlet />{" "}{/* // Children route'ları olduğunu ve onu göstereceğimizi belli ettik */}
      <LanguageSelector/> 
      </div>   
      </Provider>
    </>
  );
}

export default App; // böyle yazarsak import ederken {} ile uğraşmayız
