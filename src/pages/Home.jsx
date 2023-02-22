import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { useAuth } from '../context/AuthContext';
import Navbar from '../layout/Navbar';

const Home = () => {
  const {  user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      <h3 className="text-gray-600 mt-2 mb-2">Restaurants and cafes</h3>
      <div className="flex w-full h-12 text-gray-500 text-center gap-2 pr-2 pl-2 overflow-x-auto items-center">
        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000 focus:outline-none"
                onClick={() => handleButtonClick("all")}
                autoFocus>
          <div className="flex justify-center items-center w-32">
            <p>All</p>
          </div>
        </button>
        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
                onClick={() => handleButtonClick("hamburger")}>
          <div className="flex justify-center items-center w-32">
            <p>🍔 Hamburger</p>
          </div>
        </button>
        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
                onClick={() => handleButtonClick("pizza")}>
          <div className="flex justify-center items-center w-32">
            <p>🍕 Pizza</p>
          </div>
        </button>
        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
                onClick={() => handleButtonClick("salad")}>
          <div className="flex justify-center items-center w-32">
            <p>🥗 Salad</p>
          </div>
        </button>
        <button className="flex justify-center items-center w-full h-full bg-gray-200 rounded-md hover:bg-yellow-1000 p-2 focus:bg-yellow-1000"
                onClick={() => handleButtonClick("pasta")}>
          <div className="flex justify-center items-center w-32">
            <p>🍝 Pasta</p>
          </div>
        </button>
      </div>
      
      <RestaurantCard category={selectedCategory} />
      <h1>Welcome {user.displayName || user.email}</h1>
      <Navbar />
    </div>
  );
}

export default Home