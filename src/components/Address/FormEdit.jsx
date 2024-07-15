import React, { useState, useContext, useEffect } from 'react';
import { AddressContext } from '../../contexts/Address-context/Address-context';
import axios from 'axios';
import { province } from '../Address/province';

const FormEdit = () => {
    const { hdlCloseFromEdit, editAddress, apiAddress } = useContext(AddressContext);
    const [input, setInput] = useState({
        name: "",
        address: "",
        province: "",
        district: "",
        code: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        if (editAddress) {
            setInput(editAddress);
        }
    }, [editAddress]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const rs = await axios.put(`http://localhost:8080/address/${editAddress.address_id}`, input);
            hdlCloseFromEdit();
            apiAddress(); 
            alert('Update Success')
        } catch (err) {
            console.log(err.message);
            alert('Error: ' + err.message);
        }
    };

    return (
        <>
            <dialog id='FormEdit' className='modal'>
                <div className='w-2/6 min-w-[600px] bg-white rounded-2xl shadow-xl mx-auto  p-4 relative px-16'>
                    <h2 className='text-2xl mt-1 text-black pb-4'>แก้ไขที่อยู่การจัดส่ง</h2>
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
                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">จังหวัด</span>
                                <select
                                    className="select select-info  max-w-xl"
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
                            </div>
                        </div>
                        <span className="label-text mt-2 pb-1">ที่อยู่</span>
                        <textarea
                            type="text"
                            className='textarea textarea-info  max-w-xl'
                            name="address"
                            id="address"
                            value={input.address}
                            onChange={handleChange}
                        ></textarea>
                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">ไปรษณีย์</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info  max-w-xs w-40'
                                    name="code"
                                    id="code"
                                    value={input.code}
                                    onChange={handleChange}
                                />
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
                            </div>
                        </div>
                        <span className="label-text mt-2 pb-1">อีเมลล์</span>
                        <input
                            type="text"
                            className='input input-bordered input-info  max-w-xl'
                            name="email"
                            id="email"
                            value={input.email}
                            onChange={handleChange}
                        />
                        <div className='flex mt-7 gap-6'>
                            <button type="submit" className='btn btn-outline btn-success w-72 rounded-xl'>บันทึก</button>
                            <button type="button" className='btn btn-outline btn-error w-40 rounded-xl' onClick={hdlCloseFromEdit}>ยกเลิก</button>
                        </div>
                    </form>
                </div>

            </dialog>

        </>
    );
};

export default FormEdit;
