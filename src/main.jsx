import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import Local from './Components/Local/Local.jsx'

const routes= createBrowserRouter([
  {path:'/', element:<Local/>,},
  {path:'*', element:'Website in devlopment this path is not found sorry...',}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
