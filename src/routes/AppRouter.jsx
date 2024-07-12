import React from 'react'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import { RouterProvider } from 'react-router-dom'
import NavBar from './../components/home/NavBar';


const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: <>
            <NavBar />
            <Outlet />
        </>,
        errorElement: <h1>Wrong path</h1>,
        children: [
            {index: true, element:<LoginForm/>},
            {path: 'register', element: <RegisterForm/>},
        ]
    }
]
)



export default function AppRouter() {
    return (
      <RouterProvider router={guestRouter}/>
    )
  }
  
