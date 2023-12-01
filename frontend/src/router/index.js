import {  createBrowserRouter} from 'react-router-dom'
import App from "../App"
import SignUp from "../Pages/SignUp"
import LoginPage from '../Pages/Login'
import About from '../Pages/About'
import Home from '../Pages/Home'
export const router = createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:"/",
                Component:Home,
                index:true
            },
            {
                path:"/signup",
                Component:SignUp
            },
            {
                path:"/login",
                Component:LoginPage
            },
            {
                path:"/about",
                Component:About
            }
        ]
    }
])