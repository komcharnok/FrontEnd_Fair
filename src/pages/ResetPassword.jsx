import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const { token } = useParams(); 
  const navigate = useNavigate(); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const response = await axios.post('http://localhost:8080/auth/reset-password', {
        token,
        newPassword,
        confirmNewPassword,
      });
      setMessage(response.data.msg);
      setError(false); // No error
      setCountdown(5); // Reset the countdown
    } catch (error) {
      console.error('Error occurred:', error);
      setMessage(error.response?.data?.message || 'Something went wrong');
      setError(true); // Set error
    } finally {
      setLoading(false); // Set loading to false when request is complete
    }
  };

  useEffect(() => {
    if (message && !error) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            navigate('/');
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(timer); // Cleanup interval on component unmount
    }
  }, [message, error, navigate]);

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
          <button type="submit" className="btn bg-red-500 mt-4 text-white hover:bg-red-400 mt-4 w-full">
            {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'}
          </button>
        </form>
        <div className='flex flex-col justify-center'>
          {message && (
            <>
              <p className='text-center'>{message}</p>
              {!error && <p className='text-center'>Redirecting in {countdown} seconds...</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
