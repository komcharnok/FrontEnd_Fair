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
<<<<<<< HEAD
            {index: true, element: <HomePage/>},
            {path: 'register', element: <RegisterForm/>},
            { path: "review", element: <ReviewPage /> },
            { path: "reviewcreate", element: <ReviewCreate /> },
            { path: "*", element: <h1>Page not found</h1> }
=======
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


>>>>>>> fbd50d392b6113301fcdea56588b5c50eb6616ca
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
<<<<<<< HEAD
            {index: true, element:<LoginForm/>},
            { path: "review", element: <ReviewPage /> },
=======
            { index: true, element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },

            
              
>>>>>>> fbd50d392b6113301fcdea56588b5c50eb6616ca
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
  
