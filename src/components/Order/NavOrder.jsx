import React from 'react'
import { Link } from 'react-router-dom';

export default function NavOrder() {

    return (
        <div>
            <div className="mx-auto  border-b-2 border-gray-200  text-black ">
                <div className=" container  flex justify-around p-0  ">
                    <div >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/orderall'>
                                    <a>ทั้งหมด</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/nopay'>
                                    <a>ค้างชำระ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to=''>
                                    <a>ที่ต้องจัดส่ง</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to=''>
                                    <a>จัดส่งแล้ว</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/revieworder'>
                                    <a>รอรีวิว</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                                      
                </div>
            </div>
        </div>
    )
}
