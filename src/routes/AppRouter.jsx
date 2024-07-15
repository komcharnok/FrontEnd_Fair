import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import ShopCard from '../pages/ShopCard/ShopCard';
import Address from '../pages/Address/Address';
import HomePage from '../pages/home/HomePage';
import Order from '../pages/Order/Order';
import Pays from '../pages/Pay/Pays';
import PaySucess from '../components/Pay/PaySucess';
import OrderAll from '../components/Order/OrderAll';
import Nopay from '../components/Order/Nopay';
import ReviewOrder from './../components/Order/ReviewOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shopcard', element: <ShopCard /> },
      { path: 'address', element: <Address /> },
      { path: 'pays', element: <Pays /> },
      { path: 'order', element: <Order /> },
      { path: 'orderall', element: <OrderAll /> },
      { path: 'paysucess', element: <PaySucess /> },
      { path: 'nopay', element: <Nopay /> },
      { path: 'revieworder', element: <ReviewOrder /> },
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
