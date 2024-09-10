import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './Css/Home.css'
import './Css/Hover.css'
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Orders from './Pages/Orders';
import PlaceOrder from './Pages/PlaceOrder';
import Products from './Pages/Products';
import Nav from './Components/Nav';
import Userprofile from './Pages/Userprofile';

  const routers = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/login', element:<Login/>},
    {path:'/cart', element:<Cart/>},
    {path:'/collection', element:<Collection/>},
    {path:'/contact', element:<Contact/>},
    {path:'/orders', element:<Orders/>},
    {path:'/placeOrder', element:<PlaceOrder/>},
    {path:'/products', element:<Products/>},
    {path:'/myprofile', element:<Userprofile/>},
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
