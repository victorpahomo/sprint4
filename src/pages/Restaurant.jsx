import React, { useEffect, useState } from 'react'
import { Alert } from '../components/Alert';
import { useInfo } from '../context/HandleInfoContext'
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const { restaurantSelected,setProductSelected,setrestaurantToSend} = useInfo();
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
    <div>
        HOLA
        {restaurantSelected && (
          <>
            <img src={restaurantSelected.logo} alt="Restaurant Logo" />
            <img src={restaurantSelected.banner} alt="" />
            <h1>{restaurantSelected.name}</h1>
            <p>{restaurantSelected.description}</p>
            <p>{restaurantSelected.stars}</p>
            <p>10min - 30min</p>

            {
              restaurantSelected.menu.map((item, index) => {
                return (
                  <div onClick={() => handleClick(item)} key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                  </div>
                );
                })
            }

            
          </>
        )}
    </div>
  );
};

export default Product;
