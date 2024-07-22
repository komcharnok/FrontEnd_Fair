import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopCardPay = ({ orderUser, calculateTotalPrice }) => {
    const navigate = useNavigate();
    const totalPrice = calculateTotalPrice();


    const loading = () => {
        toast.promise(
            new Promise(() => {
                setTimeout(() => {
                    navigate(`/address?data=${encodeURIComponent(JSON.stringify({ orderUser, totalPrice }))}`);
                }, 2000); // 2-second delay
            }),
            {
                pending: "กรุณารอสักครู่...",
            },
            {}
        );
    };

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
            <button
                onClick={loading}
                className="btn btn-error hover:bg-red-700 w-full mt-3 text-white rounded-3xl">
                ทำการสั่งซื้อ
            </button>
            <ToastContainer/>
        </div>
    );
};


export default ShopCardPay;
