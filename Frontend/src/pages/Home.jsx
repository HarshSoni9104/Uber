import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586805372042-327a923a697a?w=1000&auto=format&fit=crop&q=60')" }}>
      
      {/* Uber Logo */}
      <div className="pt-8">
        <img className="w-25 ml-8 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
      </div>

      {/* Content Box */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-6 text-center shadow-lg rounded-t-lg">
        <h2 className="text-3xl font-bold">Get started with Uber</h2>
        
        {/* Continue Button */}
        <Link to="/login" className="inline-block mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300">
            Continue <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
