
import React from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate back to the landing page
    navigate('/');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-black">Account Settings</h1>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
              alt="Marry Doe" 
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-popx-purple rounded-full p-1 border-2 border-white">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg">Marry Doe</h2>
            <p className="text-gray-600 text-sm">marry@gmail.com</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet.
        </p>
      </div>
      <div className="border-t-2 border-dashed border-gray-300 mx-4"></div>
      <div className="p-4">
        <button 
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
