import React from 'react';
import { useData } from '../context/DataContext';
import { useInfo } from '../context/HandleInfoContext';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ category }) => {
  const { updatedDbFirestore } = useData();
  const { setRestaurantSelected } = useInfo();
  const navigate = useNavigate();

  function handleClick(restaurant) {
    setRestaurantSelected(restaurant);
    navigate('/restaurant');
  }

  function getRestaurantsToRender() {
    const restaurants = category === 'all' || category === ""
      ? Object.values(updatedDbFirestore)
      : Object.values(updatedDbFirestore).filter(obj => obj['food-categories'].includes(category));
    return restaurants.map(restaurant => (
      <div onClick={() => handleClick(restaurant)} key={restaurant.id} className="flex flex-col m-4 p-4 rounded-lg shadow-md cursor-pointer max-w-sm">
        <div className="relative w-full h-48">
          <img src={restaurant.banner} alt='' className="absolute inset-0 object-cover w-full h-full rounded-t-lg" />
        </div>
        <div className="flex flex-col justify-between flex-1 p-4 bg-white rounded-b-lg">
          <div>
            <h1 className="text-xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex justify-between mb-2">
              <h1 className="text-sm font-medium">{restaurant.stars}</h1>
              <h1 className="text-sm font-medium">{restaurant.schedule}</h1>
            </div>
            <p className="text-sm">{restaurant.description}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex flex-wrap justify-center">
      {getRestaurantsToRender()}
    </div>
  );
};

export default RestaurantCard;
