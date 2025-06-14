
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex-grow"></div>
      <div className="text-left">
        <h1 className="text-3xl font-bold text-black">Welcome to PopX</h1>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className="mt-8 space-y-3">
        <Link to="/register" className="block w-full text-center bg-popx-purple text-white py-3 rounded-md font-semibold">
          Create Account
        </Link>
        <Link to="/login" className="block w-full text-center bg-popx-purple-light text-black py-3 rounded-md font-semibold">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
