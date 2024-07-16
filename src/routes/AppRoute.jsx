/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import { RouterProvider } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HomePage from "../pages/home/HomePage";

import ShopCard from "../pages/ShopCard/ShopCard";
import Address from "../pages/Address/Address";
import Pays from "../pages/Pay/Pays";
import Order from "../pages/Order/Order";
import OrderAll from "../components/Order/OrderAll";
import PaySucess from "../components/Pay/PaySucess";
import Nopay from "../components/Order/Nopay";
import PreOderHome from "../pages/preorderhome/PreOderHome";
import VendorHome from "../pages/vendor/vendorHome";
import ReviewCreate from "../pages/review/ReviewCreate";
import ReviewPage from "./../pages/review/Review";
import SearchProduct from "../pages/searchProduct/SearchProduct";
import MainChat from "../pages/chatApp/MainChat";
import Navbar from "../layouts/Navbar";
import ProductDetail from "../components/Product/productDetail";
import MainBestProduct from "../components/home/bestSell/MainBestProduct";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "shopcart", element: <ShopCard /> },
      { path: "address", element: <Address /> },
      { path: "pays", element: <Pays /> },
      { path: "order", element: <Order /> },
      { path: "orderall", element: <OrderAll /> },
      { path: "paysucess", element: <PaySucess /> },
      { path: "nopay", element: <Nopay /> },
      { path: "revieworder", element: <Nopay /> },
      { path: "vendorhome", element: <VendorHome /> },
      { path: "review", element: <ReviewPage /> },
      { path: "reviewcreate", element: <ReviewCreate /> },
      { path: "search/:keyword", element: <SearchProduct /> },
      { path: "search/category/:category", element: <SearchProduct /> },
      { path: "/chat", element: <MainChat /> },
      { path: "home", element: <HomePage /> },
      { path: "home/productdetail/:product_id", element: <ProductDetail /> },
      { path: "preoderhome", element: <PreOderHome /> },
      {
        path: "preoderhome/productdetail/:product_id",
        element: <ProductDetail />,
      },
      { path: "best", element: <MainBestProduct /> },
      { path: "/chat", element: <MainChat /> },
      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
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
  return <RouterProvider router={finalRouter(user)} />;
}
