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
  <form className="flex items-center justify-center mt-8 mb-4" onSubmit={handleSubmit}>
    <input
      type="text"
      value={categoryToSearch}
      onChange={handleChange}
      className="px-4 py-2 mr-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      placeholder="Search for a dish"
    />
    <button
      type="submit"
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    >
      Search
    </button>
  </form>
  {submitted && filteredDishes.length ? (
    <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-lg">
      {filteredDishes.map((dish) => (
        <div key={dish.name} className="flex flex-col justify-between bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
          <img src={dish.image} alt={dish.name} className="object-cover w-full h-44" />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{dish.name}</h3>
            <p className="text-gray-500">Price: {dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    submitted && (
      <div className="flex flex-col items-center justify-center">
        <img src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027958/sprint4/gui-images/notfound.png" alt="not found" className="w-64 h-64 mb-4" />
        <p className="text-lg font-medium text-gray-500">Nothing found</p>
      </div>
    )
  )}
</>

  );
};

export default Search;
