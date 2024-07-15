/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import { RouterProvider } from 'react-router-dom'
import NavBar from '../components/home/NavBar';
import useAuth from '../hooks/useAuth'
import HomePage from '../pages/home/HomePage';

//By.QQQ
import ShopCard from '../pages/ShopCard/ShopCard';
import Address from '../pages/Address/Address';
import Pays from '../pages/Pay/Pays';
import Order from '../pages/Order/Order';
import OrderAll from '../components/Order/OrderAll'
import PaySucess from '../components/Pay/PaySucess';
import Nopay from '../components/Order/Nopay';
import PreOderHome from '../pages/preorderhome/PreOderHome'
import VendorHome from '../pages/vendor/vendorHome'


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
            { path: 'vendorhome', element: <VendorHome /> },  


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
            { path: 'preoderhome', element: <PreOderHome /> },


            
              
            { path: "*", element: <h1>Page not found</h1> }
        ]
    }
]
)

const finalRouter = (user) => {
    if (!user) return guestRouter
    if (user) return userRouter
}


export default function AppRouter() {
    const { user } = useAuth()
    return <RouterProvider router={finalRouter(user)} />;
}

