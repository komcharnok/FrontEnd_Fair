import React from "react";
import useAuth from "./../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../store/store";

function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { getUser, user } = useUser();
  console.log("user = ", user);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = { username: input.username, password: input.password };
      const rs = await axios.post("http://localhost:8080/auth/login", body);
      localStorage.setItem("token", rs.data);
      const rs2 = await axios.get("http://localhost:8080/auth/me", {
        headers: { Authorization: `Bearer ${rs.data}` },
      });
      // setUser(rs2.data.user);
      setUser(rs2.data.username);
      // console.log("rs2.data = ", rs2.data);
      const userData = rs2.data;
      const newUser = {
        ...userData,
        token: rs.data,
      };
      getUser(newUser);
    } catch (err) {
      alert(err.response?.data?.error);
    }
  };

  return (
    <div className="flex flex-row mt-10">
      <img
        src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
        alt="Landing"
        className=" w-3/5"
      />
      <div className="flex flex-col mx-auto justify-center gap-3">
        <h1 className=" text-2xl font-bold">Log in to Fair</h1>
        <h1 className=" pb-5">Enter your details below</h1>
        <form className="flex flex-col" onSubmit={hdlSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input  input-lg w-full max-w-md border-solid border-0 border-b border-gray-300 rounded-none	focus:outline-none pl-0 w-screen"
            name="username"
            value={input.username}
            onChange={hdlChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input  input-lg w-full max-w-md border-solid border-0 border-b border-gray-300 rounded-none	focus:outline-none pl-0 w-screen"
            name="password"
            value={input.password}
            onChange={hdlChange}
            required
          />

          <div className="flex items-center justify-between pt-5">
            <button type="submit" className="btn bg-red-500 text-white">
              Login
            </button>
            <a href="#">Forgot Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
