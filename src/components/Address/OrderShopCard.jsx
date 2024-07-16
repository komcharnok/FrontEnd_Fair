import React, { useContext } from 'react';
import { AddressContext } from '../../contexts/Address-context/Address-context';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const OrderShopCard = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const datas = JSON.parse(queryParams.get('data'));
    console.log(datas);

    // const { data } = useContext(AddressContext);

    if (!datas || datas.length === 0) {
        return <div>No items to display.</div>;
    }

    return (
        <div className=' p-4 mt-5 border-x-gray-50'>
            <div className="flex items-center  ">
                <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
                <Link to="/order">
                    <h2 className="text-red-500 text-xl font-semibold">รายการสั่งซื้อสินค้า</h2>
                </Link>
            </div>
            {datas.map((item) => (
                <div key={item.id} className="item h-auto pb-5 shadow-md p-4 mt-5 flex ">
                    <img src={item.product.product_pic} className='object-cover rounded shadow-lg h-44 w-52' alt={item.product.product_title} />
                    <div className="txt ml-2 flex-grow">
                        <div className='flex w-full ml-1'>
                            <div className='w-1/2'>
                                <p className='font-semibold text-black'>ชื่อสินค้า</p>
                                <p className='text-black mt-1'>{item.product.product_title}</p>
                            </div>
                            <div className='w-1/3 text-center'>
                                <p className='font-semibold text-black'>จำนวน</p>
                                <p className='text-black mt-1'></p>
                            </div>
                            <div className='w-1/2 text-end'>
                                <p className='font-semibold text-black'>ราคาต่อชิ้น</p>
                                <p className='text-black mt-1'>$  {item.product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-end w-full mr-5 mt-4 shadow py-3 bg-gradient-to-r from-red-400 rounded-lg'>
                <p className='text-black'>
                    <span>รวมทั้งหมด :</span>
                    <span className='text-red-500'> </span>
                </p>
            </div>
        </div>
    );
};

export default OrderShopCard;
