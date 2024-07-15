import React from 'react'
import NavOrder from './NavOrder'

export default function Nopay() {
    return (
        <div>
            <NavOrder />
            <div className='container mx-auto px-4 mt-3'>
                <div>
                    <div className='bg-gray-500 h-12 items-center justify-between flex'>
                        <div className='ml-3'>
                            <span className='text-white'>เลขที่คำสั่งซื้อ : </span>
                            <span className='text-red-500'>1</span>
                        </div>
                        <div className='mr-3'>
                            <span className='text-white'>สถานะคำสั่งซื้อ : </span>
                            <span className='text-red-500'>ยังไม่ชำระ</span>
                        </div>
                    </div>
                    <div className="item h-auto pb-5 shadow-md p-4 mt-5 flex ">
                        <img src="" className='object-cover rounded shadow-lg h-44 w-52' alt="" />
                        <div className="txt ml-2 flex-grow">
                            <div className='flex w-full ml-1'>
                                <div className='w-1/2'>
                                    <p className='font-semibold text-black'>ชื่อสินค้า</p>
                                    <p className='text-black mt-1'>asda</p>
                                </div>
                                <div className='w-1/3 text-center'>
                                    <p className='font-semibold text-black'>จำนวน</p>
                                    <p className='text-black mt-1'></p>
                                </div>
                                <div className='w-1/2 text-end'>
                                    <p className='font-semibold text-black'>ราคาต่อชิ้น</p>
                                    <p className='text-black mt-1'>$  450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item h-auto pb-5 shadow-md p-4 mt-5 flex ">
                        <img src="" className='object-cover rounded shadow-lg h-44 w-52' alt="" />
                        <div className="txt ml-2 flex-grow">
                            <div className='flex w-full ml-1'>
                                <div className='w-1/2'>
                                    <p className='font-semibold text-black'>ชื่อสินค้า</p>
                                    <p className='text-black mt-1'>asda</p>
                                </div>
                                <div className='w-1/3 text-center'>
                                    <p className='font-semibold text-black'>จำนวน</p>
                                    <p className='text-black mt-1'></p>
                                </div>
                                <div className='w-1/2 text-end'>
                                    <p className='font-semibold text-black'>ราคาต่อชิ้น</p>
                                    <p className='text-black mt-1'>$  450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
