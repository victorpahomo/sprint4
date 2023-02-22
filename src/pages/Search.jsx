import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { useData } from '../context/DataContext';

const Search = () => {
  const { findCategory } = useData();
  const [categoryToSearch, setCategoryToSearch] = useState('');
  const [dishesObtained, setDishesObtained] = useState([]);
  const [submitted, setSubmitted] = useState(false); // nueva variable de estado

  const handleChange = (e) => {
    setCategoryToSearch(e.target.value.toLowerCase().trim());
  };

  const searchDishes = async () => {
    const dishes = await findCategory(categoryToSearch);
    setDishesObtained(dishes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await searchDishes();
    setSubmitted(true); // establecer submitted en true después de hacer clic en enviar
  };

  const filteredDishes = dishesObtained.reduce((acc, curr) => {
    const filtered = curr.menu.filter((dish) => dish.category === categoryToSearch);
    const filteredProperties = filtered.map((dish) => ({
      name: dish.name,
      image: dish.image,
      price: dish.price
    }));
    return [...acc, ...filteredProperties];
  }, []);

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" value={categoryToSearch} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {submitted && filteredDishes.length ? (
        filteredDishes.map((dish) => (
          <div key={dish.name}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>Price: {dish.price}</p>
          </div>
        ))
      ) : (
        submitted && (
          <div>
          <img src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027958/sprint4/gui-images/notfound.png" alt="not found" />
          <p>Nothing found</p>
          </div>
        )
      )}
    </>
  );
};

export default Search;
