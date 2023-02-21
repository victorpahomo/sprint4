import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import { useData } from '../context/DataContext';
import { async } from '@firebase/util';

const Search = () => {
  const { findDishCategory, findCategory, updatedDbFirestore} = useData();
  const [categoryToSearch, setcategoryToSearch] = useState(null)
  const [dishesObtained, setdishesObtained] = useState(null)

  const handleChange = (e) => {
    setcategoryToSearch(e.target.value.toLowerCase().trim())
  };

/*   const mostrarPlatos = () => {
    updatedDbFirestore.map((obj) => {
      console.log(obj.menu)
      obj.menu.map((dish) => {
        console.log(dish)
      })
    })
  } */

  const traerPlatos = async () => {
    setdishesObtained(await findCategory(categoryToSearch.toLowerCase().trim()))
   
  }

  const entregaPlatos = () => {
    const array = []
    dishesObtained.map((obj) => {
      obj.menu.map((dish) => {
        if (categoryToSearch == dish.category) {
          array.push(dish)
        }
        
      })
    })
    console.log(array);
    return array
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await traerPlatos();
    entregaPlatos();
/*     mostrarPlatos();
 */
  }


  return (
    <>
      <div className="flex w-full h-10 flex-col justify-center items-center mt-10">
        <form onSubmit={handleSubmit} className="flex w-96 justify-center items-center gap-2 pr-4 pl-4 search">
          <label htmlFor="search" className="cursor-pointer">
            <svg
              className="fill-yellow-400"
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
            onChange={handleChange}
            id="search"
            name="search"
            className="w-full h-full pl-2 rounded-lg bg-slate-100 cursor-pointer hover:bg-yellow-100"
            type="search"
            placeholder="Search for a dish"
            aria-label="Search"
          />
          <button
            className="hover:bg-yellow-400 h-full text-slate-600 bg-yellow-1000 rounded-md p-1"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="relative text-left w-96 mt-2">
          <h3 className="absolute left-5 text-slate-500">Recent searches</h3>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Search;