import React from 'react';
import { useLocation } from 'react-router-dom';

const PaySum = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const datas = JSON.parse(queryParams.get('data'));

  if (!datas || !datas.orderUser || datas.orderUser.length === 0) {
    return <div>No items to display.</div>;
  }

  return (
    <div className='max-w-[400px]'>
      <div className='flex justify-between w-full mr-5 text-black mt-4'>
        <p>หมายเลขคำสั่งซื้อ</p>
        <p>1</p>
      </div>
      <div className='flex justify-between w-full mr-5 text-black mt-4'>
        <p>ยอดรวมย่อย</p>
        <p>$ {datas.totalPrice}</p>
      </div>
      <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 text-black'>
        <p>ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ</p>
        <p>ฟรี</p>
      </div>
      <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 mt-5 text-red-600 font-semibold'>
        <p>ยอดรวม</p>
        <p className='font-semibold'>$ {datas.totalPrice}</p>
      </div>
    </div>
  );
};

export default PaySum;
