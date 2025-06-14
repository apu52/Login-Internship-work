
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/form/Input';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to account page after login
    navigate('/account');
  };

  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold text-black">Signin to your PopX account</h1>
        <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className="mt-6 space-y-5" onSubmit={handleLogin}>
          <Input id="email" type="email" label="Email Address" placeholder="Enter email address" />
          <Input id="password" type="password" label="Password" placeholder="Enter password" />
        </form>
      </div>
      <div className="pb-4">
        <button 
          onClick={handleLogin}
          className="w-full bg-popx-purple text-white py-3 rounded-md font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
