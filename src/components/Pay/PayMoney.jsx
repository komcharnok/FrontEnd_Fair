import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PayMoney() {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const validateForm = () => {
        return cardNumber.trim() !== '' && cvv.trim() !== '' && expiryDate.trim() !== '' && cardHolderName.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsFormValid(true);
            navigate('/paysucess');
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <div className='w-2/6 min-w-[500px] bg-white rounded-2xl shadow-md p-4 relative'>
            <div className='flex justify-between'>
                <h2>ข้อมูลบัตร</h2>
                <div className='flex items-center gap-2'>
                    <img className='w-8 h-3' src="https://static-00.iconduck.com/assets.00/visa-icon-2048x628-6yzgq2vq.png" alt="visa" />
                    <img className='w-8 h-5' src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_dla_symbol_92.png" alt="mastercard" />
                    <img className='w-8 h-5' src="https://static-00.iconduck.com/assets.00/jcb-icon-2048x1537-sqmx1xp9.png" alt="jcb" />
                </div>
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input
                    placeholder="หมายเลขบัตร"
                    type="text"
                    className={`input input-bordered ${!isFormValid && cardNumber.trim() === '' ? 'input-error' : 'input-info'} w-full max-w-xl mt-8`}
                    name="numbercard"
                    id=""
                    value={cardNumber}
                    onChange={(e) => handleInputChange(e, setCardNumber)}
                    required
                />
                <div className="flex gap-6 mt-8">
                    <div className="flex flex-col">
                        <input
                            placeholder="CVV"
                            type="text"
                            className={`input input-bordered ${!isFormValid && cvv.trim() === '' ? 'input-error' : 'input-info'} max-w-xs w-40`}
                            name="cvv"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => handleInputChange(e, setCvv)}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            placeholder="วันหมดอายุ (ดด/ปป)"
                            type="text"
                            className={`input input-bordered ${!isFormValid && expiryDate.trim() === '' ? 'input-error' : 'input-info'} w-72 max-w-xs`}
                            name="date"
                            id="date"
                            value={expiryDate}
                            onChange={(e) => handleInputChange(e, setExpiryDate)}
                            required
                        />
                    </div>
                </div>
                <input
                    placeholder="ชื่อเจ้าของบัตร"
                    type="text"
                    className={`input input-bordered ${!isFormValid && cardHolderName.trim() === '' ? 'input-error' : 'input-info'} max-w-xl mt-8`}
                    name="name"
                    id="name"
                    value={cardHolderName}
                    onChange={(e) => handleInputChange(e, setCardHolderName)}
                    required
                />
                <button type="submit" className='btn btn-outline btn-success mt-3 rounded-3xl w-full text-center'>
                    <p>ชำระเงิน</p>
                </button>
                <div className='flex mx-auto items-center justify-center gap-2 pb-3'>
                </div>
            </form>
        </div>
    );
}
