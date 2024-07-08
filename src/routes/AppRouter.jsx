import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home/Home';
import Layout from '../layouts/Layout';
import About from '../components/About/About';
import ShopCard from '../components/ShopCard/ShopCard';
import Address from '../components/Address/Address';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'shopcard', element: <ShopCard /> },
      { path: 'address', element: <Address /> },
      // { path: 'product', element: <Product /> },
      { path: "*" , element: <p>page not found</p> }
    ],
  },
]);

function AppRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRouter;
