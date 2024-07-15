import React from 'react'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import { RouterProvider } from 'react-router-dom'
import NavBar from './../components/home/NavBar';
import useAuth from '../hooks/useAuth'
import HomePage from './../pages/home/HomePage';
import ReviewCreate from '../pages/review/ReviewCreate'


const userRouter = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Outlet />
        </>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'register', element: <RegisterForm/>},
            { path: "review", element: <ReviewPage /> },
            { path: "reviewcreate", element: <ReviewCreate /> },
            { path: "*", element: <h1>Page not found</h1> }
        ]
    }

])

const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: <>
            <NavBar />
            <Outlet />
        </>,
        children: [
            {index: true, element:<LoginForm/>},
            { path: "review", element: <ReviewPage /> },
            { path: "*", element: <h1>Page not found</h1> }
        ]
    }
]
)

const finalRouter = (user) => {
    if(!user) return guestRouter
    if(user) return userRouter
  }


  export default function AppRouter() {
    const {user} = useAuth()
    return <RouterProvider router={finalRouter(user)} />;
  }
  
