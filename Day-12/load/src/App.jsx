import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import { userLoader } from './pages/Users';
import { Outlet } from "react-router-dom";

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
        path: "users/:id",
        element: <Users />,
        loader: userLoader
      }
    ]
  }
]);


function App()
{
   return <RouterProvider router={router} />;

}

export default App