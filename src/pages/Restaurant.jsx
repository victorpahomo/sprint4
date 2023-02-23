import React, { useEffect, useState } from 'react'
import { Alert } from '../components/Alert';
import { useInfo } from '../context/HandleInfoContext'
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';

const Restaurant = () => {
  const { restaurantSelected, setProductSelected, setrestaurantToSend } = useInfo();
  const navigate = useNavigate();

  const handleClick = (product) => {
    setProductSelected(product);
    setrestaurantToSend({
      id: restaurantSelected.id,
      nameR: restaurantSelected.name,
      logo: restaurantSelected.logo
    })
    navigate("/product");
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 md:items-center md:justify-center mb-4">
      {restaurantSelected && (
        <React.Fragment>
          <div className="w-full md:w-1/2">
            <img className="mb-4 w-full" src={restaurantSelected.banner} alt="Banner del restaurante" />
          </div>
          <div className="w-full md:w-1/2">
            <img className="mb-4 w-1/2 mx-auto" src={restaurantSelected.logo} alt="Logo del restaurante" />
            <h1 className="text-2xl font-bold text-center mb-2">{restaurantSelected.name}</h1>
            <p className="text-center text-gray-500 mb-2">{restaurantSelected.description}</p>
            <div className="flex items-center justify-center mb-4">
              <p className="text-center text-yellow-400 mr-1">{restaurantSelected.stars}</p>
              <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path d="M10 1l2.928 6.763 6.072.414-4.64 4.123 1.51 6.432L10 14.897l-6.87 3.536 1.51-6.432L.072 8.177l6.072-.414L10 1z" />
              </svg>
            </div>
            <p className="text-center text-gray-500 mb-4">10 - 30 min</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurantSelected.menu.map((item, index) => {
                return (
                  <div onClick={() => handleClick(item)} key={index} className="flex flex-col items-center justify-center cursor-pointer">
                    <img className="rounded-xl w-36 h-24 md:w-40 md:h-28 mb-2" src={item.image} alt={item.name} />
                    <p className="text-center font-bold mb-1">{item.name}</p>
                    <p className="text-center">$ {item.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      )}
      <Cart />
    </div>
  );
};

export default Restaurant;
