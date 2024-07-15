import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SearchProduct from "../pages/searchProduct/SearchProduct";
import MainChat from "../pages/chatApp/MainChat";

const user = false;

const homeRouter = createBrowserRouter([
  {
    path: "/",
    // element: <></>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search/:keyword", element: <SearchProduct /> },
      { path: "search/category/:category", element: <SearchProduct /> },
      { path: "/chat", element: <MainChat /> },
      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
]);

const finalRouter = (user) => {
  if (!user) return homeRouter;
};

export default function AppRouter() {
  return <RouterProvider router={finalRouter(user)} />;
}
