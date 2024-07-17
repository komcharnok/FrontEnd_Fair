import React, { useState, useContext } from 'react';
import OrderAll from '../../../components/Order/OrderNoPay/OrderAll';
import { OrderProvider, OrderContext } from '../../../contexts/Order-context/Order-context';
import Nopay from '../../../components/Order/OrderNoPay/Nopay';

const Order = () => (
  <OrderProvider>
    <OrderContent />
  </OrderProvider>
)

const OrderContent = () => {
  const { orderUser } = useContext(OrderContext);
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="container px-4 mx-auto">
      <div>
        <div className="mx-auto border-b-2 border-gray-200 text-black">
          <div className="container flex justify-around p-0">
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className={activeSection === 'all' ? 'text-red-500' : ''} onClick={() => handleSectionClick('all')}>
                  ทั้งหมด
                </button>
              </ul>
            </div>
           
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className={activeSection === 'toship' ? 'text-red-500' : ''} onClick={() => handleSectionClick('toship')}>
                  ที่ต้องจัดส่ง
                </button>
              </ul>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className={activeSection === 'toreview' ? 'text-red-500' : ''} onClick={() => handleSectionClick('toreview')}>
                  รอรีวิว
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {activeSection === 'all' && <OrderAll orderUser={orderUser} />}
      {activeSection === 'nopay' && <Nopay orderUser={orderUser} />}
    </div>
  );
};

export default Order;
