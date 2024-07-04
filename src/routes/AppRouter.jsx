import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../layouts/Layout';
import About from '../pages/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
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
