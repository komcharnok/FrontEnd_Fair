import React from 'react'

export default function PaySum() {
  return (
    <div className='max-w-[400px] '>
          <div className='flex justify-between w-full mr-5 text-black mt-4'>
            <p>หมายเลขคำสั่งซื้อ</p>
            <p>1</p>
          </div>
          <div className='flex justify-between w-full mr-5 text-black mt-4'>
            <p>ยอดรวมย่อย</p>
            <p>$</p>
          </div>
          <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 text-black'>
            <p>ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ</p>
            <p>ฟรี</p>
          </div>
          <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 mt-5 text-red-600 font-semibold'>
            <p>ยอดรวม</p>
            <p className='font-semibold'>$</p>
          </div>
        </div>
  )
}
