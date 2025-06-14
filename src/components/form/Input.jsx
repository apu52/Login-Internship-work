
import React from 'react';

const Input = ({ id, label, type = 'text', placeholder, required = false }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-sm font-medium text-popx-purple">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-popx-purple focus:border-popx-purple sm:text-sm"
      />
    </div>
  );
};

export default Input;
