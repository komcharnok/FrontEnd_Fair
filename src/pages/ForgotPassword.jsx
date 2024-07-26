import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/forgot-password', {
        username,
        email
      });
      toast.success(response.data.msg, { autoClose: 8000 }); // Set toast duration to 8 seconds
      setMessage(response.data.msg);
      setCountdown(10); // Start countdown on success
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong', { autoClose: 8000 }); // Set toast duration to 8 seconds
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0 && message) {
      onSuccess(); // Call onSuccess callback to close the modal
    }
    return () => clearTimeout(timer);
  }, [countdown, message, onSuccess]);

  return (
    <div className="flex flex-col p-5 shadow-2xl rounded-lg justify-center items-center w-[600px] h-[400px] mt-10 bg-white">
      <h2 className="font-bold">Please enter your Email and Username.</h2>
      <form className="flex flex-col gap-5 pt-5" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 w-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn bg-red-500 mt-4 text-white hover:bg-red-400">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'}
        </button>
      </form>
      {countdown > 0 && (
        <p className="pt-4">Redirecting in {countdown} seconds...</p>
      )}
      <ToastContainer
        position="top-center"
        autoClose={8000} // Set default duration to 8 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ForgotPassword;
