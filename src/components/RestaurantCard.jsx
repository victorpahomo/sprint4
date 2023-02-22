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
      <div onClick={() => handleClick(restaurant)} key={restaurant.id}>
        <img src={restaurant.banner} alt='' />
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.stars}</h1>
        <h1>{restaurant.schedule}</h1>
        <p>{restaurant.description}</p>
      </div>
    ));
  }

  return <React.Fragment>{getRestaurantsToRender()}</React.Fragment>;
};

export default RestaurantCard;
