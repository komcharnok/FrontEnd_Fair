// ShopCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ShopCardProvider } from '../../contexts/ShopCard-context/ShopCard-context';
import ShopCardList from './ShopCardList';
import ShopCardPay from './ShopCardPay';

const ShopCard = () => {
    return (
        <ShopCardProvider>
            <div className='max-w-[1200px] px-4 mx-auto'>
                <div className="mx-auto mt-16 flex text-slate-400 font-light">
                    <Link to='/'>
                        หน้าหลัก
                    </Link>
                    <p className='ml-3'>/</p>
                    <Link to='/card' className='ml-3 font-semibold text-black'>
                        ตะกร้า
                    </Link>
                </div>
                <div className="container mx-auto min-h-full flex justify-between bg-white">
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
