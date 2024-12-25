'use client';

import { useState } from 'react';

export default function ButtonPage() {
  const [toggle, settoggle] = useState(true);

  const handleToggle = () => {
    settoggle(!toggle); // Simplified toggle logic
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <button
        id="toggle-button"
        onClick={handleToggle}
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
      >
        {toggle ? 'Hide Text' : 'Show Text'}
      </button>

      {toggle && (
        <p
          id="toggle-text"
          className="mt-4 text-lg text-gray-700"
        >
          Text below the button
        </p>
      )}
    </div>
  );
}
