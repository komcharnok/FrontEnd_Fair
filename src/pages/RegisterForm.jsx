import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm({ onSuccess }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [registered, setRegistered] = useState(false);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      setLoading(true);
      const rs = await axios.post("http://localhost:8080/auth/register", input);
      if (rs.status === 201) {
        toast.success("Registration successful! Please verify your email.");
        setRegistered(true);
        setCountdown(10);
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0 && registered) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      navigate("/");
      onSuccess(); // Call the onSuccess callback to close the modal
    }
    return () => clearTimeout(timer);
  }, [countdown, registered, navigate, onSuccess]);

  return (
    <div>
      <h1 className="text-2xl text-center my-4 font-bold">Register</h1>
      <form
        className="flex flex-col gap-2 w-[600px] border mx-auto rounded-md p-4 shadow-md"
        onSubmit={hdlSubmit}
      >
        <label className="form-control w-full">
          <span className="label-text">E-mail</span>
          <input
            type="email"
            className="input input-bordered w-full"
            name="email"
            value={input.email}
            onChange={hdlChange}
            required
            disabled={registered}
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Phone number</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="phone_number"
            value={input.phone_number}
            onChange={hdlChange}
            required
            disabled={registered}
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Username</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="username"
            value={input.username}
            onChange={hdlChange}
            required
            disabled={registered}
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Password</span>
          <input
            type="password"
            className="input input-bordered w-full"
            name="password"
            value={input.password}
            onChange={hdlChange}
            required
            disabled={registered}
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text">Confirm password</span>
          <input
            type="password"
            className="input input-bordered w-full"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChange}
            required
            disabled={registered}
          />
        </label>
        <label>
          <span className="label-text">Upload profile picture</span>
          <input
            type="file"
            className="file-input file-input-bordered file-input-red-500 w-full max-w"
            disabled={registered}
          />
        </label>
        <button
          type="submit"
          className="btn bg-red-500 hover:bg-red-400 mt-6 text-white"
          disabled={loading || registered}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Submit"}
        </button>
        
      </form>
      <ToastContainer />
    </div>
  );
}

export default RegisterForm;
