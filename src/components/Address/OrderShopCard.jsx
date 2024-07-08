import React, { useContext } from 'react';
import { AddressContext } from '../../contexts/Address-context/Address-context';
import { useLocation } from 'react-router-dom';



const OrderShopCard = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const datas = JSON.parse(queryParams.get('data'));
    console.log(datas)


    const { data } = useContext(AddressContext);

    if (!data || data.length === 0) {
        return <div>No items to display.</div>;
    }

    

    return (
        <div className='shadow p-4 mt-3'>
            <h2 className='text-2xl font-semibold mt-2 text-black'>รายการสั่งซื้อสินค้า</h2>
            {datas.map((item) => (
                <div key={item.id} className="item h-auto pb-5 border-b-2 border-gray-200 flex mt-3">
                    <img src={item.img} className='object-cover rounded shadow-lg h-24 w-28' alt={item.name} />
                    <div className="txt ml-2 flex-grow">
                        <div className='flex w-full ml-1'>
                            <div className='w-1/2'>
                                <p className='font-semibold text-black'>ชื่อสินค้า</p>
                                <p className='text-black mt-1'>{item.name}</p>
                            </div>
                            <div className='w-1/3 text-center'>
                                <p className='font-semibold text-black'>จำนวน</p>
                                <p className='text-black mt-1'>{item.quantity}</p>
                            </div>
                            <div className='w-1/2 text-end'>
                                <p className='font-semibold text-black'>ราคาต่อชิ้น</p>
                                <p className='text-black mt-1'>${(item.quantity * item.price).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-end w-full mr-5 mt-4'>
                <p className='text-black'>
                    <span>รวมทั้งหมด</span>
                    <span className='text-red-500'> $</span>
                </p>
            </div>
        </div>
    );
};

export default OrderShopCard;
