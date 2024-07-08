// ShopCardList.jsx
import React, { useContext } from 'react';
import { ShopCardContext } from '../../contexts/ShopCard-context/ShopCard-context';

const ShopCardList = () => {
    const { data, removeItem, handleQuantityChange } = useContext(ShopCardContext);

    return (
        <>
            {data.map((item) => (
                <div key={item.id} className="item h-auto pb-5 border-b-2 border-gray-200 flex mt-3">
                    <img src={item.img} className='object-cover rounded shadow-lg h-44 w-52' alt={item.name} />
                    <div className="txt ml-2 flex-grow">
                        <div className='flex justify-between w-full mr-5'>
                            <p className='font-bold text-black'>{item.name}</p>
                            <p className='text-black'>${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <p className='text-black'>จำนวน</p>
                            <input
                                type="number"
                                className='w-16 p-2 border border-gray-300 rounded ml-5 text-black bg-white'
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                min="1"
                            />
                        </div>
                        <button className="btn btn-circle mt-14 float-right bg-slate-100" onClick={() => removeItem(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShopCardList;
