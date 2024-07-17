import React, { useState, useContext } from 'react';
import { OrderProvider, OrderContext } from '../../../contexts/Order-context/Order-context';
import OrderPayMoney from '../../../components/Order/OrderSucess/OrderPayMoney';
import OrderReview from '../../../components/Order/OrderSucess/OrderReview';

const OrderSucess = () => (
    <OrderProvider>
        <OrderSucessContent />
    </OrderProvider>
);

const OrderSucessContent = () => {
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
                                <button className={activeSection === 'orderpaymoney' ? 'text-red-500' : ''} onClick={() => handleSectionClick('orderpaymoney')}>
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
                                    รีวิวที่นี่
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {activeSection === 'orderpaymoney' && <OrderPayMoney orderUser={orderUser} />}
            {activeSection === 'toreview' && <OrderReview orderUser={orderUser} />}
        </div>
    );
};

export default OrderSucess;
