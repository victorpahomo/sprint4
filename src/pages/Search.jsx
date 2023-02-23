import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../context/HandleInfoContext';
const Search = () => {
  const { findCategory } = useData();
  const [categoryToSearch, setCategoryToSearch] = useState('');
  const [dishesObtained, setDishesObtained] = useState([]);
  const [submitted, setSubmitted] = useState(false); // Variable para saber si se econtró el palto a buscar
  const {setRestaurantSelected,setrestaurantToSend,setProductSelected} = useInfo();
  const navigate = useNavigate();

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
      name: dish.name,// agregar el nombre del plato al objeto
      image: dish.image,// agregar la imagen del plato al objeto
      price: dish.price,//  agregar el precio del plato al objeto
      idItem: dish.idItem,// agregar el id del plato al objeto
      cookingTimeMin: dish.cookingTimeMin ,// agregar el tiempo de preparación mínimo del plato al objeto
      cookingTimeMax: dish.cookingTimeMax,// agregar el tiempo de preparación máximo del plato al objeto
      curr: curr// agregar el restaurante actual al objeto
    }));
    return [...acc, ...filteredProperties];
  }, []);

  const handleClick = (obj) => {
    setrestaurantToSend(obj.curr);// establecer el restaurante seleccionado en el contexto
    setProductSelected(obj);// establecer el plato seleccionado en el contexto
    setRestaurantSelected(obj.curr);// establecer el restaurante seleccionado en el contexto  
    navigate("/product");
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center pb-10">
      <div className="flex fixed top-8 h-full md:w-3/4 md:h-80 flex-col md:p-1">
        <form
          className="flex w-full h-10 items-center gap-1"
          onSubmit={handleSubmit}
        >
          <label htmlFor="search" className="cursor-pointer">
            <svg
              className="fill-slate-400"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7925 3.2243C16.7133 1.14507 13.9489 0 11.0084 0C8.06792 0 5.30349 1.14507 3.2243 3.2243C1.14507 5.30349 0 8.06792 0 11.0084C0 13.9488 1.14507 16.7133 3.2243 18.7925C5.30349 20.8717 8.06797 22.0168 11.0084 22.0168C13.9488 22.0168 16.7133 20.8717 18.7925 18.7925C20.8717 16.7133 22.0168 13.9488 22.0168 11.0084C22.0168 8.06792 20.8717 5.30349 18.7925 3.2243ZM11.0084 19.9162C6.09654 19.9162 2.10052 15.9202 2.10052 11.0084C2.10052 6.09654 6.09659 2.10052 11.0084 2.10052C15.9202 2.10052 19.9162 6.09654 19.9162 11.0084C19.9162 15.9202 15.9202 19.9162 11.0084 19.9162Z"
                fill="inherit"
              />
              <path
                d="M24.0975 24.3822L17.8677 18.1526C17.4976 17.7825 16.8976 17.7825 16.5275 18.1526C16.1575 18.5226 16.1575 19.1227 16.5275 19.4927L22.7572 25.7224C22.9423 25.9075 23.1848 26 23.4274 26C23.6699 26 23.9124 25.9075 24.0975 25.7224C24.4675 25.3523 24.4675 24.7523 24.0975 24.3822Z"
                fill="inherit"
              />
            </svg>
          </label>
          <input
            className="w-full h-full pl-2 rounded-lg cursor-pointer hover:bg-yellow-100 border border-slate-300"
            type="search"
            value={categoryToSearch}
            onChange={handleChange}
          />
          <button
            className="hover:bg-yellow-400 h-full text-slate-600 bg-yellow-1000 rounded-md p-1"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="flex flex-col justify-center items-center mt-2">
          {submitted && filteredDishes.length
            ? filteredDishes.map((dish) => (
                <div
                  onClick={()=> handleClick(dish)}// al hacer clic en un plato, se establece el restaurante seleccionado en el contexto
                  className="flex w-full h-14 justify-item items-center gap-2 ml-14"
                  key={dish.name}
                >
                  <img
                    className="w-20 h-12 rounded-xl"
                    src={dish.image}
                    alt={dish.name}
                  />
                  <div>
                    <h3>{dish.name}</h3>
                    <p className="text-slate-400">$ {dish.price}.00</p>
                  </div>
                </div>
              ))
            : submitted && (
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-50"
                    src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027958/sprint4/gui-images/notfound.png"
                    alt="not found"
                  />
                  <p>Nothing found</p>
                </div>
              )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Search;
