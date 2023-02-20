import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-slate-800  fixed bottom-0 w-screen text-center">
      <div className=" bg-cyan-900 flex justify-around items-center p-1">
       
        <Link to="/home" className="flex flex-col justify-center items-center">
          <img className="" src="./public/home-icon.svg" alt="home icon" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            HOME
          </span>
        </Link>

        <Link to="/statistics" className="flex flex-col justify-center items-center" >
          <img
            src="./public/search-icon.svg"
            width="40px"
            alt="icono-statistics"
          />
          <span className="text-white text-sm font-anton hover:text-green-500">
            SEARCH
          </span>
        </Link>


        <Link to="/profile" className="flex flex-col justify-center items-center">
          <img src="./public/order-icon.svg" width="40px" alt="icono-profile" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            ORDERS
          </span>
        </Link>

        <Link to="/profile" className="flex flex-col justify-center items-center">
          <img src="./public/profile-icon.svg" width="40px" alt="icono-profile" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            PROFILE
          </span>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;