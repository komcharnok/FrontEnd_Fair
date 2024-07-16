import React from 'react'
import { Link } from 'react-router-dom'

export default function PaySucess() {
    return (
        <div className='max-w-[800px] mx-auto shadow-lg  rounded-xl mt-3 p-16'>
            <div className='max-w-[400px] mx-auto  '>
                <div className='flex flex-col items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/512/148/148767.png" alt="sucess" className='w-36' />
                    <h1 className='text-3xl mt-8'>ชำระเงินเสร็จสิ้น</h1>
                    <Link to="/order">
                        <button className="btn mt-5 rounded-xl">ดูรายละเอียดสินค้า</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
