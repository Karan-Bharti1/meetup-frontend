import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Description from './pages/Description.js'
const router=createBrowserRouter([
  {
    path:"/",
  element:<App/>
  },{
    path:"/:eventId",
    element:<Description/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
