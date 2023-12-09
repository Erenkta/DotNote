import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.scss"
import "./locales/index.js"
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.js'





ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

    {/* <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter> */}