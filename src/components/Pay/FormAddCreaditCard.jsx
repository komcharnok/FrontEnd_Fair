import React, { useState, useContext } from 'react';
import { PayContext, PayProvider } from '../../contexts/Pay-context/Pay-context';


const FormAddCreaditCard = () => {
    const { hdlClosePatCard } = useContext(PayContext)

    return (
        <>
            <dialog id="FormAddCreaditCard" className="modal"  >
                <div className='w-2/6 min-w-[600px] bg-white rounded-2xl shadow-xl mx-auto  p-4 relative px-16'>
                    <h2 className='text-2xl mt-1 text-black pb-4'>บัตรใหม่</h2>
                    <form className='flex flex-col' >
                        <span className="label-text mt-2 pb-1">ชื่อ-นามสกุล</span>
                        <input
                            type="text"
                            className='input input-bordered input-info w-full max-w-xl'
                            name=""
                            id=""
                        />
                        <div className="flex gap-5">
                            <div className="flex flex-col ">
                                <span className="label-text mt-2 pb-1">จังหวัด</span>
                                <select
                                    className="select select-info  max-w-xl"
                                    name=''
                                    id=''

                                >
                                    <option disabled value="">กรุณาเลือก</option>

                                </select>
                            </div>
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">อำเภอ</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info w-72 max-w-xs'
                                    name=""
                                    id=""

                                />
                            </div>
                        </div>
                        <span className="label-text mt-2 pb-1">ที่อยู่</span>
                        <textarea
                            type="text"
                            className='textarea textarea-info  max-w-xl'
                            name=""
                            id=""

                        >
                        </textarea>
                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">ไปรษณีย์</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info  max-w-xs w-40'
                                    name=""
                                    id=""

                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="label-text mt-2 pb-1">เบอร์โทร</span>
                                <input
                                    type="text"
                                    className='input input-bordered input-info w-72 max-w-xs'
                                    name=""
                                    id=""

                                />
                            </div>
                        </div>
                        <span className="label-text mt-2 pb-1">อีเมลล์</span>
                        <input
                            type="text"
                            className='input input-bordered input-info  max-w-xl'
                            name=""
                            id=""

                        />
                        <div className="flex mt-7 gap-6">
                            <button type="submit" className='btn btn-outline btn-success w-72 rounded-xl   '>บันทึก</button>
                            <button type="submit" className='btn btn-outline btn-error w-40 rounded-xl ' onClick={hdlClosePatCard} >ยกเลิก</button>
                        </div>
                        <div className='flex mx-auto items-center justify-center gap-2 pb-3'>
                        </div>
                    </form>
                </div>

            </dialog>
            <div className='' ></div>

        </>
    );
}

export default FormAddCreaditCard;
