import React, { useState } from 'react';
import Carrousel from '../components/Carrousel';
import RestaurantCard from '../components/RestaurantCard';
import { useAuth } from '../context/AuthContext';
import Navbar from '../layout/Navbar';

const Home = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  }

  return (

    <div className='mb-4 pt-3'>
      <div className='flex pl-4'>
        <img className='w-10 h-10' src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677129952/sprint4/gui-images/location.png" alt="Location image" />
        <div>
        
          <p className='text-yellow-400 pl-3'>DELIVER TO</p>
          <div class="relative">
            <select class="block appearance-none w-auto bg-white hover: px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>883 Poblado, Medellin</option>
              <option>975 Colinas,Manizales</option>
              <option>215 Cerritos, Pereira</option>
              <option>967 Pance, Cali</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <Carrousel />
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
          onClick={() => handleButtonClick("snacks")}>
          <div className="flex justify-center items-center w-32">
            <p>🍟 Snacks</p>
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