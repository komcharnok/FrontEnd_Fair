import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  { to: "/", text: "" }
  
];

const finalNav = (user) => {
  if (!user) return guestNav;
  if (user) return userNav;
};




function NavBar() {

  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
  };

  return (
    <header className="container mx-auto flex justify-between items-center p-4 border-b">
      <div className="text-red-500 text-2xl font-bold">FAIR</div>
      <div className="w-4/5 relative flex items-center">
        <input
          type="text"
          placeholder="ค้นหาสินค้า"
          className="w-full pl-10 pr-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
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
      <p className="text-xl font-bold text-red-500 pl-7">{user}</p>
      <ul className=" flex flex-row gap-5">
      {finalNav(user).map((el) => (
          <li key={el.to}>
            <Link to={el.to}>{el.text}</Link>
          </li>
        ))}

        {user && (
          <li>
            <Link to="/" onClick={hdlLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
       
      
      <div className="relative">
        <svg
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 29.1384C11.5523 29.1384 12 28.6711 12 28.0948C12 27.5185 11.5523 27.0513 11 27.0513C10.4477 27.0513 10 27.5185 10 28.0948C10 28.6711 10.4477 29.1384 11 29.1384Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 29.1384C25.5523 29.1384 26 28.6711 26 28.0948C26 27.5185 25.5523 27.0513 25 27.0513C24.4477 27.0513 24 27.5185 24 28.0948C24 28.6711 24.4477 29.1384 25 29.1384Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6.18042H7L10 23.9207H26"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 18.3551H25.59C25.7056 18.3552 25.8177 18.3135 25.9072 18.237C25.9966 18.1605 26.0579 18.0541 26.0806 17.9357L27.8806 8.54385C27.8951 8.46812 27.8934 8.38996 27.8755 8.31503C27.8575 8.2401 27.8239 8.17025 27.7769 8.11054C27.73 8.05083 27.6709 8.00273 27.604 7.96972C27.5371 7.93672 27.464 7.91962 27.39 7.91968H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}

export default NavBar;
