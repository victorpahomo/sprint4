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
  const { setRestaurantSelected, setrestaurantToSend, setProductSelected } = useInfo();
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
      cookingTimeMin: dish.cookingTimeMin,// agregar el tiempo de preparación mínimo del plato al objeto
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
        <form className="flex w-full h-10 items-center gap-1" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="inherit"><path d="M18.793 3.224A10.936 10.936 0 0 0 11.008 0c-2.94 0-5.705 1.145-7.784 3.224A10.936 10.936 0 0 0 0 11.008c0 2.94 1.145 5.705 3.224 7.785a10.936 10.936 0 0 0 7.784 3.224c2.94 0 5.705-1.145 7.785-3.224a10.936 10.936 0 0 0 3.224-7.785c0-2.94-1.145-5.705-3.224-7.784Zm-7.785 16.692c-4.911 0-8.907-3.996-8.907-8.908 0-4.911 3.996-8.907 8.907-8.907 4.912 0 8.908 3.996 8.908 8.907 0 4.912-3.996 8.908-8.908 8.908Z" /><path d="m24.098 24.382-6.23-6.23a.948.948 0 0 0-1.34 1.34l6.23 6.23a.945.945 0 0 0 1.34 0c.37-.37.37-.97 0-1.34Z" /></svg>
            </span>
            <input
              className="w-full p-4 pl-10 bg-stone-100 border-none rounded-lg cursor-pointer hover:bg-stone-100 border border-stone-100"
              type="search"
              value={categoryToSearch}
              onChange={handleChange}
              placeholder="Search for a dish"
            />
          </div>
          <button
            className="cursor-pointer hover:bg-yellow-200 p-4 text-slate-600 bg-yellow-1000 rounded-md"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="flex flex-col justify-center items-center mt-2">
          {submitted && filteredDishes.length
            ? filteredDishes.map((dish) => (
              <div
                onClick={() => handleClick(dish)}// al hacer clic en un plato, se establece el restaurante seleccionado en el contexto
                className="flex w-full h-auto mt-4 justify-item items-center gap-2 ml-2"
                key={dish.name}
              >
                <img
                  className="w-28 h-20 rounded-xl"
                  src={dish.image}
                  alt={dish.name}
                />
                <div>
                  <h3 className='pl-2 text-lg'>{dish.name}</h3>
                  <p className="pl-2 text-slate-400">$ {dish.price}</p>
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
