import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
        <>
            <div className=" bg-zinc-800  flex items-center h-11">
                <div className="h-5 flex  mx-auto">
                    <p className=' text-white text-xs'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a className=" text-white text-xs underline ml-5" href='#'>ShopNow</a>
                    <div className="dropdown dropdown-end ml-32 text-white text-xs items-center">
                        <div tabIndex={0} role="button" className="  rounded-btn">English</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-22 mt-4">
                            <li><a href='#' className='text-black'>Thailand</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto navbar border-b-2 border-gray-200 bg-white text-black">
                <div className=" w-[1200px] mx-auto flex justify-between p-0  ">

                    <div className="">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <Link to='/'>
                            <a className="btn btn-ghost text-xl">FAIR</a>

                        </Link>
                    </div>
                    <div className="">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/about'>
                                    <a>เกี่ยวกับ</a>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <a>ติดต่อ</a>
                                </Link>
                            </li>
                       
                        </ul>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <Link to="/">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item bg-slate-100">8</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
