import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart'
import Success from './pages/Success'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render Home / Users */}
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 common layout
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"/cart",
        element:<Cart/>
      },
       {
        path:"/success",
        element:<Success/>
      },
    
    ]
  }
]);


function App()
{
   return <RouterProvider router={router} />;

}

export default App