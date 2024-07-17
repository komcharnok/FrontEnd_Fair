import React from 'react'
import { useLocation } from 'react-router-dom';
import PaySum from '../../components/Pay/PaySum'
import PayMoney from '../../components/Pay/PayMoney'

export default function Pays() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const datas = JSON.parse(queryParams.get('data'));

  if (!datas || !datas.orderUser || datas.orderUser.length === 0) {
    return <div>No items to display.</div>;
  }
  return (
    <><div className=' max-w-[1000px] mx-auto flex flex-col justify-between shadow-xl rounded-2xl pb-12 mt-3'>

      <div className="flex items-center mt-9 ml-12 ">
        <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
        <h2 className="text-red-500 text-xl font-semibold">ชำระเงิน</h2>
      </div>
      <div className='flex justify-center mx-8 gap-8 mt-8 '>
        <PaySum datas={datas}/>
        <PayMoney datas={datas}/>
      </div>
    </div>
    </>
  )
}
