import React, { useContext,useState } from 'react';
import { AddressContext } from '../../contexts/Address-context/Address-context';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";

const AddressList = () => {
    const { address, hdlOpenAddname, hdlOpenFromEdit, hdlDelete } = useContext(AddressContext);
    const [checkedIndex, setCheckedIndex] = useState(0);

    const handleCheckboxChange = (index) => {
        setCheckedIndex(index);
    };

    return (
        <div className='shadow-md p-4 mt-9'>
            <div className='flex justify-between items-center w-full'>
                <div className="flex items-center">
                    <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
                    <h2 className="text-red-500 text-xl font-semibold">ที่อยู่จัดส่ง</h2>
                </div>
                <button onClick={hdlOpenAddname} className="btn btn-sm border-black text-black text-xs bg-white">
                    <p className='font font-normal'>+ เพิ่มที่อยู่ใหม่</p>
                </button>
            </div>
            <div>
                {address.map((el, index) => (
                    <div key={el.address_id} className="item h-auto pb-6 mt-4">
                        <div>
                            <div className="flex items-center">
                                <input type="checkbox" checked={checkedIndex === index} onChange={() => handleCheckboxChange(index)} className="checkbox checkbox-xs" />
                                <div className="ml-2 flex justify-between w-full">
                                    <div className='flex gap-2'>
                                        <h1 className="font-semibold">{el.name}</h1> |
                                        <h2>{el.phone}</h2> |
                                        <h2>{el.email}</h2>
                                        <h1>{el.address}</h1> ,
                                        <h2>อ.{el.district}</h2>
                                        <h2>จ.{el.province}</h2>
                                        <h2>{el.code}</h2>
                                    </div>
                                    <div className='flex gap-2 mr-4'>
                                        <span className='link-hover cursor-pointer text-blue-500' onClick={() => hdlOpenFromEdit(el)}>แก้ไข</span>

                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                    <span className='link-hover cursor-pointer text-red-500'>ลบ</span>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>ยืนยันการลบ</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        คุณแน่ใจว่าต้องการลบที่อยู่นี้หรือไม่? การดำเนินการนี้จะลบข้อมูลที่อยู่ถาวรจากระบบของเราและไม่สามารถย้อนกลับได้
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => hdlDelete(null, el.address_id)}
                                                    >
                                                        ลบ
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                                {/* <ToastContainer /> */}
                            </div>
                            <div className="ml-5 flex gap-2"></div>
                            <div>{index === 0 && <span className="font-semibold text-red-500 ml-5">ค่าเริ่มต้น</span>}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddressList;
