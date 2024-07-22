import React, { useState, useContext } from 'react';
import { AddressContext } from '../../contexts/Address-context/Address-context';
import axios from 'axios';
import { province } from '../Address/province';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAddname = () => {
    const notifySucess = () => {
        toast.success('บันทึกข้อมูลสำเร็จ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    };
    const notifyError = () => {
        toast.error('บันทึกข้อมูลผิดพลาด', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });
    }


    const { hdlCloseAddname, apiAddress } = useContext(AddressContext);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        address: "",
        province: "",
        district: "",
        code: "",
        phone: "",
        email: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = {};

        // Validate inputs
        for (let key in input) {
            if (!input[key]) {
                newErrors[key] = getErrorMessage(key);
                valid = false;
            }
        }

        setErrors(newErrors);

        if (!valid) return;

        try {
            const rs = await axios.post('http://localhost:8080/address', input);
            notifySucess();
            setTimeout(() => {
                hdlCloseAddname();
                apiAddress();
            }, 2000); // 2-second delay

            // alert('Create Success');
        } catch (err) {
            console.log(err.message);
            notifyError('Error: ' + err.message);
        }
    }



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setErrors(prev => ({
            ...prev,
            [name]: value ? "" : getErrorMessage(name)
        }));
    }



    const getErrorMessage = (fieldName) => {
        switch (fieldName) {
            case 'name':
                return 'กรุณากรอกชื่อ นามสกุล';
            case 'address':
                return 'กรุณากรอกที่อยู่';
            case 'province':
                return 'กรุณาเลือกจังหวัด';
            case 'district':
                return 'กรุณากรอกอำเภอ';
            case 'code':
                return 'กรุณากรอกรหัสไปรษณีย์';
            case 'phone':
                return 'กรุณากรอกเบอร์โทร';
            case 'email':
                return 'กรุณากรอกอีเมล์';
            default:
                return 'กรุณากรอกข้อมูล';
        }
    }



    return (
        <>
            <dialog id="FormAddName" className="modal">
                <div className='w-2/6 min-w-[600px] bg-white rounded-2xl shadow-xl mx-auto p-4 relative px-16'>
                    <h2 className='text-2xl mt-1 text-black pb-4'>ที่อยู่การจัดส่ง</h2>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <span className="label-text mt-2 pb-1">ชื่อ-นามสกุล</span>
                        <input
                            type="text"
                            className='input input-bordered input-info w-full max-w-xl'
                            name="name"
                            id="name"
                            value={input.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}

                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">จังหวัด</span>
                                <select
                                    className="select select-info max-w-xl"
                                    name='province'
                                    id='province'
                                    value={input.province}
                                    onChange={handleChange}
                                >
                                    <option disabled value="">กรุณาเลือก</option>
                                    {province.map(p => (
                                        <option key={p.id} value={p.name}>{p.name}</option>
                                    ))}
                                </select>
                                {errors.province && <p className="text-red-500">{errors.province}</p>}
                            </div>
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">อำเภอ</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info w-72 max-w-xs'
                                    name="district"
                                    id="district"
                                    value={input.district}
                                    onChange={handleChange}
                                />
                                {errors.district && <p className="text-red-500">{errors.district}</p>}
                            </div>
                        </div>

                        <span className="label-text mt-2 pb-1">ที่อยู่</span>
                        <textarea
                            className='textarea textarea-info max-w-xl'
                            placeholder="Bio"
                            name="address"
                            id="address"
                            value={input.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className="text-red-500">{errors.address}</p>}

                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">ไปรษณีย์</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info max-w-xs w-40'
                                    name="code"
                                    id="code"
                                    value={input.code}
                                    onChange={handleChange}
                                />
                                {errors.code && <p className="text-red-500">{errors.code}</p>}
                            </div>
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">เบอร์โทร</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info w-72 max-w-xs'
                                    name="phone"
                                    id="phone"
                                    value={input.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                            </div>
                        </div>

                        <span className="label-text mt-2 pb-1">อีเมลล์</span>
                        <input
                            type="text"
                            className='input input-bordered input-info max-w-xl'
                            name="email"
                            id="email"
                            value={input.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}

                        <div className="flex mt-7 gap-6">
                            <button type="submit" className='btn btn-outline btn-success w-72 rounded-xl'>บันทึก</button>
                            <ToastContainer />

                            <button type="button" className='btn btn-outline btn-error w-40 rounded-xl' onClick={hdlCloseAddname}>ยกเลิก</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default FormAddname;
