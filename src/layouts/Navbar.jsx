/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterForm from './../pages/RegisterForm';

const guestNav = [
  { to: "/", text: "เข้าสู่ระบบ" },
  { text: "ลงทะเบียน" },
];

const userNav = [];

const finalNav = (user) => {
  if (!user) return guestNav;
  if (user) return userNav;
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const hdlLogout = () => {
    logout();
  };

  //Mix section
  const navigator = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();

    if (!keyword) {
      return;
    }

    // await searchProduct(keyword);
    setKeyword("");
    navigator(`/search/${keyword}`);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  const handleVendorHome = () => {
  
      navigator(`/vendorhome/${user.user_id}`);
  
  };


  return (
    <>
      <div className=" bg-zinc-800  flex items-center h-11 w-full">
        <div className="h-5 flex  mx-auto">
          <p className=" text-white text-xs">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className=" text-white text-xs underline ml-5" href="#">
            ShopNow
          </a>
          <div className="dropdown dropdown-end ml-32 text-white text-xs items-center">
            <div tabIndex={0} role="button" className="  rounded-btn">
              English
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-22 mt-4"
            >
              <li>
                <a href="#" className="text-black">
                  Thailand
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mx-auto navbar border-b-2 border-gray-200  text-black h-10 bg-white">
          <div className=" container mx-auto flex justify-between p-0  ">
            <div className="">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <Link to="/home">
                <a className="btn btn-ghost text-xl">FAIR</a>
              </Link>
            </div>
            <div className="w-3/5 relative flex items-center">
              <input
                type="text"
                placeholder="ค้นหาสินค้า"
                className="w-full pl-10 pr-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
                name="keyword"
                value={keyword}
                onChange={(e) => handleInput(e)}
              />
              <button
                type="submit"
                onClick={search}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115 7.5a7.5 7.5 0 011.65 9.15z"
                  />
                </svg>
              </button>
            </div>
            <div className="">
              <ul className="menu menu-horizontal px-1"></ul>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end flex">
                <div>
                  <ul className="menu menu-horizontal px-1">
                    <li className=" text-red-500 font-bold ">
                      <Link to="/">
                        <a>{user}</a>
                      </Link>
                    </li>
                    {finalNav(user).map((el, index) =>
                      el.text === "ลงทะเบียน" ? (
                        <li key={index}>
                          <button onClick={toggleModal}>{el.text}</button>
                        </li>
                      ) : (
                        <li key={el.to}>
                          <Link to={el.to}>{el.text}</Link>
                        </li>
                      )
                    )}

                    {user && (
                      <li>
                        <Link to="/" onClick={hdlLogout}>
                          ออกจากระบบ
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link to="/about">
                        <a>เกี่ยวกับ</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <a>ติดต่อ</a>
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleVendorHome}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>



                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <Link to="/shopcart">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item bg-slate-100">
                        8
                      </span>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal modal-open ">
          <div className="modal-box w-[700px] h-[750px] max-w-4xl overflow-hidden">
            <p className="py-4 overflow-y-auto">
              <RegisterForm onSuccess={toggleModal} />
            </p>
            <div className="modal-action">
              
            </div>
          </div>
          <button className="btn btn-circle absolute mb-[750px] ml-[700px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              onClick={toggleModal}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
