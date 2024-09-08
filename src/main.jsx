import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

  const routers = createBrowserRouter([
    {path:'/', element:'Hello! world',}
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
