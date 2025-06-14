
import React from 'react';

const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex items-center justify-center font-sans">
      <main className="w-full max-w-md h-screen md:h-[90vh] md:max-h-[800px] bg-[#F7F8F9] md:rounded-3xl shadow-lg flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;
