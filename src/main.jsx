import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import PayFee from './Pages/PayFee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  
  },
  {
    path: "/payment",
    element: <PayFee/>,
  
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
