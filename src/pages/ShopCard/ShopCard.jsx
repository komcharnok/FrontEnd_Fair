// ShopCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ShopCardProvider } from '../../contexts/ShopCard-context/ShopCard-context';
import ShopCardList from '../../components/ShopCard/ShopCardList';
import ShopCardPay from '../../components/ShopCard//ShopCardPay';

const ShopCard = () => {
    return (
        <ShopCardProvider>

            <div className='container mx-auto px-4'>
                <div className="flex items-center mt-9 ">
                    <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
                    <h2 className="text-red-500 text-xl font-semibold">ตะกร้าสินค้า</h2>
                </div>
             
                <div className="container mx-auto mt-2 min-h-full flex justify-between bg-white">

                    <div className="flex-col w-3/5">
                        <ShopCardList />
                    </div>
                    <div className="sum h-72 w-1/2 ml-5 mt-2">
                        <ShopCardPay />
                    </div>
                </div>
            </div>
        </ShopCardProvider>
    );
};

export default ShopCard;
