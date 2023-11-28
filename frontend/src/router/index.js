import {  createBrowserRouter} from 'react-router-dom'
import App from "../App"
import SignUp from '../SignUp'
import LoginPage from '../Login'
import About from '../About'
import Home from '../Home'
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