import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/reset-password', {
        token,
        newPassword,
        confirmNewPassword,
      });
      toast.success(response.data.msg, { autoClose: 8000 });
      setIsSuccess(true); // Set success to true if request is successful
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong', { autoClose: 8000 });
      setIsSuccess(false); // Set success to false if request fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            navigate('/');
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isSuccess, countdown, navigate]);

  return (
    <div className='container mx-auto rounded-xl w-[550px] mt-[250px] h-[300px] shadow-2xl bg-white'>
      <div className='flex flex-col mx-auto gap-3 w-[500px] pt-3'>
        <h2 className='text-center'>Reset Password</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn bg-red-500 mt-4 text-white hover:bg-red-400 w-full">
            {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'}
          </button>
        </form>
        <div className='flex flex-col justify-center'>
          {/* Message handling is now done via toast */}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={8000}
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

export default ResetPassword;
