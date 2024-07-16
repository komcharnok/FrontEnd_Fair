import React, { useState } from 'react';
import OrderAll from '../../components/Order/OrderAll';
import Nopay from '../../components/Order/Nopay';

function Order() {
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
                <button className="" onClick={() => handleSectionClick('all')}>
                  ทั้งหมด
                </button>
              </ul>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className="" onClick={() => handleSectionClick('nopay')}>
                  ค้างชำระ
                </button>
              </ul>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className="">
                  ที่ต้องจัดส่ง
                </button>
              </ul>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <button className="">
                  รอรีวิว
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {activeSection === 'all' && <OrderAll />}
      {activeSection === 'nopay' && <Nopay />}
    </div>
  );
}

export default Order;
