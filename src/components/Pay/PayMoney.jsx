import React from 'react'
import { Link } from 'react-router-dom'

export default function PayMoney() {
    return (
        <div className='w-2/6 min-w-[500px] bg-white rounded-2xl shadow-md    p-4 relative '>

            <div className='flex justify-between '>
                <h2>ข้อมูลบัตร</h2>
                <div className='flex items-center gap-2'>
                    <img className='w-8 h-3' src="https://static-00.iconduck.com/assets.00/visa-icon-2048x628-6yzgq2vq.png" alt="visa" />
                    <img className='w-8 h-5' src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_dla_symbol_92.png" alt="mastercard" />
                    <img className='w-8 h-5' src="https://static-00.iconduck.com/assets.00/jcb-icon-2048x1537-sqmx1xp9.png" alt="jcb" />
                </div>

            </div>
            <form className='flex flex-col' >
                <input
                    placeholder="หมายเลขบัตร"
                    type="text"
                    className='input input-bordered input-info w-full max-w-xl mt-8 '
                    name=""
                    id=""
                />

                <div className="flex gap-6 mt-8">
                    <div className="flex flex-col">
                        <input
                            placeholder="CVV"
                            type="text"
                            className='input input-bordered input-info  max-w-xs w-40'
                            name=""
                            id=""

                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            placeholder="วันหมดอายุ (ดด/ปป)"
                            type="text"
                            className='input input-bordered input-info w-72 max-w-xs'
                            name=""
                            id=""

                        />
                    </div>
                </div>
                <input
                    placeholder="ชื่อเจ้าของบัตร"
                    type="text"
                    className='input input-bordered input-info  max-w-xl mt-8'
                    name=""
                    id=""

                />
                <div className="flex mt-7 gap-6">
                    <button type="submit" className='btn btn-outline btn-error w-40 rounded-xl '  >กลับ</button>
                    <Link to="/paysucess">
                        <button type="submit" className='btn btn-outline btn-success w-72 rounded-xl   '>ชำระเงิน</button>
                    </Link>
                </div>
                <div className='flex mx-auto items-center justify-center gap-2 pb-3'>
                </div>
            </form>
        </div>
    )
}
