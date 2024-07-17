/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import { RouterProvider } from "react-router-dom";
import NavBar from "../layouts/Navbar";
import useAuth from "../hooks/useAuth";
import HomePage from "../pages/home/HomePage";

import ShopCard from "../pages/ShopCard/ShopCard";
import Address from "../pages/Address/Address";
import Pays from "../pages/Pay/Pays";

import PaySucess from "../components/Pay/PaySucess";
import PreOderHome from "../pages/preorderhome/PreOderHome";
import VendorHome from "../pages/vendor/vendorHome";
import ReviewCreate from "../pages/review/ReviewCreate";
import ReviewPage from "./../pages/review/Review";
import SearchProduct from "../pages/searchProduct/SearchProduct";
import MainChat from "../pages/chatApp/MainChat";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import ProductDetail from "../components/Product/productDetail";
import MainBestProduct from "../components/home/bestSell/MainBestProduct";
import OrderPayMoney from "../components/Order/OrderSucess/OrderPayMoney";
import Nopay from "../components/Order/OrderNoPay/Nopay";
import OrderAll from "../components/Order/OrderNoPay/OrderAll";
import StorePage from './../pages/vendor/storePage';
import OrderSucess from "../pages/Order/OrderSucess/OrderSucess";
import Order from "../pages/Order/OrderNoPay/Order";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "*", element: <h1>Page not found</h1> },
      { path: "shopcart", element: <ShopCard /> },
      { path: "address", element: <Address /> },
      { path: "pays", element: <Pays /> },
      { path: "order", element: <Order /> },
      { path: "orderall", element: <OrderAll /> },
      { path: "orderpaymoney", element: <OrderPayMoney /> },
      { path: "ordersucess", element: <OrderSucess /> },
      { path: "paysucess", element: <PaySucess /> },
      { path: "nopay", element: <Nopay /> },
      // { path: "revieworder", element: <Nopay /> },
      { path: "review", element: <ReviewPage /> },
      { path: "reviewcreate", element: <ReviewCreate /> },
      { path: "search/:keyword", element: <SearchProduct /> },
      { path: "search/category/:category", element: <SearchProduct /> },
      
      { path: "vendorhome/:user_id", element: <VendorHome /> },
      { path: "home/productdetail/:product_id", element: <ProductDetail /> },
      { path: "home", element: <HomePage /> },
      { path: "preoderhome", element: <PreOderHome /> },
      {
        path: "preoderhome/productdetail/:product_id",
        element: <ProductDetail />,
      },
      { path: "best", element: <MainBestProduct /> },
      { path: "/chat", element: <MainChat /> },
      { path: "/product/store/:store_id", element: <StorePage /> },

    ],
  },
]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password/:token", element: <ResetPassword /> },
      { path: "preoderhome", element: <PreOderHome /> },
      { path: "review", element: <ReviewPage /> },
      { path: "search/:keyword", element: <SearchProduct /> },
      { path: "search/category/:category", element: <searchProduct /> },
      { path: "home", element: <HomePage /> },
      { path: "home/productdetail/:product_id", element: <ProductDetail /> },
      { path: "preoderhome", element: <PreOderHome /> },
      {
        path: "preoderhome/productdetail/:product_id",
        element: <ProductDetail />,
      },
      { path: "best", element: <MainBestProduct /> },
      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
]);

const finalRouter = (user) => {
  if (!user) return guestRouter;
  if (user) return userRouter;
};

export default function AppRouter() {
  const { user } = useAuth();
  // const user = true;
  return <RouterProvider router={finalRouter(user)} />;
}

