
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/form/Input';

const RegisterPage = () => {
  const [isAgency, setIsAgency] = useState('No');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Navigate to login page after registration
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex-grow overflow-y-auto pr-2">
        <h1 className="text-3xl font-bold text-black">Create your PopX account</h1>
        <form className="mt-6 space-y-5" onSubmit={handleCreateAccount}>
          <Input id="fullName" label="Full Name" placeholder="Marry Doe" required />
          <Input id="phoneNumber" label="Phone number" placeholder="Marry Doe" required />
          <Input id="email" type="email" label="Email address" placeholder="Marry Doe" required />
          <Input id="password" type="password" label="Password" placeholder="Marry Doe" required />
          <Input id="companyName" label="Company name" placeholder="Marry Doe" />
          
          <div>
            <p className="text-sm font-medium text-black">Are you an Agency?*</p>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={isAgency === 'Yes'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="h-5 w-5 accent-popx-purple"
                />
                <span className="ml-2 text-sm">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={isAgency === 'No'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="h-5 w-5 accent-popx-purple"
                />
                <span className="ml-2 text-sm">No</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="pt-4">
        <button 
          type="submit" 
          onClick={handleCreateAccount}
          className="w-full bg-popx-purple text-white py-3 rounded-md font-semibold"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
