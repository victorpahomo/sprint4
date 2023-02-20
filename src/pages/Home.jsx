import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { useAuth } from '../context/AuthContext';
import Navbar from '../layout/Navbar';


const Home = () => {
  const { logout, user } = useAuth();




  return (
    <div>
      <h3 className="text-gray-600 mt-2 mb-2">Restaurants and cafes</h3>
      <div className="flex w-full h-12 text-gray-500 text-center gap-2 pr-2 pl-2 overflow-x-auto items-center">

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>All</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍔 Hamburger</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍕 Pizza</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🥗 Salad</p>
          </div>
        </button>

        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000">
          <div className="flex justify-center items-center w-32">
            <p>🍝 Pasta</p>
          </div>
        </button>
      </div>
      
      <RestaurantCard />
      <h1>Welcome {user.displayName || user.email}</h1>
      <Navbar />
    </div>
  );
};

export default Home;
