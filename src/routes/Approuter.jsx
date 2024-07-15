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
            { index: true, element: <HomePage /> },
            { path: "*", element: <h1>Page not found</h1> },
            { path: 'shopcart', element: <ShopCard /> },
            { path: 'address', element: <Address /> },
            { path: 'pays', element: <Pays /> },
            { path: 'order', element: <Order /> },
            { path: 'orderall', element: <OrderAll /> },
            { path: 'paysucess', element: <PaySucess /> },
            { path: 'nopay', element: <Nopay /> },
            { path: 'revieworder', element: <Nopay /> },
            { path: "review", element: <ReviewPage /> },
            { path: "reviewcreate", element: <ReviewCreate /> },
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
            { index: true, element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },
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
  
