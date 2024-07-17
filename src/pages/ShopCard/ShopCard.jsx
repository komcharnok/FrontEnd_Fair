import React, { useEffect, useContext } from 'react';
import { ShopCardProvider, ShopCardContext } from '../../contexts/ShopCard-context/ShopCard-context';
import ShopCardList from '../../components/ShopCard/ShopCardList';
import ShopCardPay from '../../components/ShopCard/ShopCardPay';

const ShopCard = () => (
    <ShopCardProvider>
        <ShopCardContent />
    </ShopCardProvider>
);

const ShopCardContent = () => {
    const { orderUser, getorderId,calculateTotalPrice } = useContext(ShopCardContext);
    // const totalPrice = calculateTotalPrice();

    useEffect(() => {
        getorderId();
    }, [getorderId]);

    if (!orderUser || orderUser.length === 0) {
        return <p>ไม่มีสินค้าในตะกร้า.</p>;
    }

    return (
        <div className='container mx-auto px-16'>
            <div className="flex items-center mt-9">
                <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
                <h2 className="text-red-500 text-xl font-semibold">ตะกร้าสินค้า</h2>
            </div>

            <div className="container mx-auto mt-2 min-h-full flex justify-between bg-white">
                <div className="flex-col w-3/5">
                    <ShopCardList orderUser={orderUser}   />
                </div>
                <div className="sum h-72 w-1/2 ml-5 mt-2">
                    <ShopCardPay orderUser={orderUser} calculateTotalPrice={calculateTotalPrice}  />
                </div>
            </div>
        </div>
    );
};


export default ShopCard;
