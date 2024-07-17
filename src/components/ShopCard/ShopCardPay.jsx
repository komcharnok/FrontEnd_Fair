import { Link } from 'react-router-dom';

const ShopCardPay = ({ orderUser,calculateTotalPrice }) => {
    
    const totalPrice = calculateTotalPrice();  
    
    return (
        <div className="mt-3">
            <div className='flex justify-between w-full mr-5 text-black'>
                <p>ยอดรวมย่อย</p>
                <p>$ {totalPrice}</p>
            </div>
            <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 text-black'>
                <p>ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ</p>
                <p>ฟรี</p>
            </div>
            <div className='flex justify-between w-full h-auto pb-5 mr-5 border-b-2 mt-5 text-black'>
                <p>ยอดรวม</p>
                <p className='font-semibold'>$ {totalPrice}</p>
            </div>
            <Link to={`/address?data=${encodeURIComponent(JSON.stringify({ orderUser, totalPrice }))}`}>
                <button className="btn btn-error hover:bg-red-700 w-full mt-3 text-white rounded-3xl">ทำการสั่งซื้อ</button>
            </Link>
        </div>
    );
};

export default ShopCardPay;
