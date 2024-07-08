import React, { useContext } from 'react';
import { PayContext,PayProvider } from '../../contexts/Pay-context/Pay-context';
import FormAddCreaditCard from './FormAddCreaditCard';

const Pay = () => {
    return (
        <PayProvider>
            <PayContent />
        </PayProvider>
    );
}

const PayContent = () => {

    const { opencloseCard, hdlOpenPatCard } = useContext(PayContext)
    return (
        <div className=''>
            <h2 className='text-2xl font-semibold  text-black'>เลือกวิธีชำระเงิน</h2>
          
            <div className=" mt-2 flex flex-col">
                <div className=' flex items-center'>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                    <p className="ml-3">
                        <span className="">บัตรเครดิต/บัตรเดบิต</span>
                    </p>
                </div>

                <div className="item h-auto pb-5 border-b-2 border-gray-200 flex mt-3">
                    <button className='btn btn-sm border-black text-black text-xs bg-white items-center ml-7 ' onClick={hdlOpenPatCard} >
                        {/* <i className="fa-solid fa-plus fa-xl "></i> */}
                        <p className='font font-normal '>ชำระด้วยบัตรใหม่</p>
                    </button>
                </div>
                <div className='flex mx-auto items-center justify-start gap-2 mr-1 pb-3'>
                    <button type="button" className='btn mt-4 w-32 bg-red-500 hover:bg-red-700 text-white' >สั่งสินค้า</button>
                </div>
                {opencloseCard && <FormAddCreaditCard />}
            </div>
        </div>
    );
}

export default Pay;
