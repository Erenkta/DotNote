
import {  createBrowserRouter} from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import App from '@/App'
import  Activation  from '@/pages/Activation'
import { UserPage } from '@/pages/UserPage'
import LoginPage from '@/pages/Login'

export const router = createBrowserRouter([
{
  path:"/",
  Component:App,
  children:[
    {
      path:"/", // path="*" dersek varolan pathler hariç tüm pathler buraya fakat childen içinde bunu kullanamazsın !! 
      index:true, // App'nin root url'i budur demek
      Component:Home,
     // errorElement:<div>Unexpected Error</div>
    },
    {
      path:"/signup",
      Component:SignUp,
     // errorElement:<div>Unexpected Error</div> // olmayan URL'de hata göstermek
    },
    {
      path:"/activation/:token",
      Component:Activation,
    },
    {
      path:"/user/:id",
      Component:UserPage
    },{
      path:"/login",
      Component:LoginPage
    }
  ]
}
])
//CreateHashRouter'da var istediğini kullanabilirsin
