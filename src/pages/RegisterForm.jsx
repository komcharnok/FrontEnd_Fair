import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    email: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const rs = await axios.post("http://localhost:8080/auth/register", input);
      if (rs.status === 201) {
        alert("Register successfully, Please verify your email.");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center my-4 font-bold">Register</h1>
      <form
        className="flex flex-col gap-2 w-[600px] border mx-auto rounded-md p-4 shadow-md"
        onSubmit={hdlSubmit}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">E-mail</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full "
            name="email"
            value={input.email}
            onChange={hdlChange}
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Phone number</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="phone_number"
            value={input.phone_number}
            onChange={hdlChange}
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="username"
            value={input.username}
            onChange={hdlChange}
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full "
            name="password"
            value={input.password}
            onChange={hdlChange}
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Confirm password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full "
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChange}
            required
          />
        </label>
        <label>
          <div className="label">
            <span className="label-text">Upload profile picture</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-red-500 w-full max-w "
          />
        </label>
        <button className="btn btn-outline bg-red-500  mt-6 text-white	">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
