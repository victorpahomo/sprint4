import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-slate-800  fixed bottom-0 w-screen text-center">
      <div className=" bg-cyan-900 flex justify-around items-center p-1">
       
        <Link to="/home" className="flex flex-col justify-center items-center">
          <img className="" src="./icono-home.svg" width="40px" alt="icono-home" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            HOME
          </span>
        </Link>

        <Link to="/statistics" className="flex flex-col justify-center items-center" >
          <img
            src="./icono-statistics.svg"
            width="40px"
            alt="icono-statistics"
          />
          <span className="text-white text-sm font-anton hover:text-green-500">
            SEARCH
          </span>
        </Link>


        <Link to="/profile" className="flex flex-col justify-center items-center">
          <img src="./icono-profile.svg" width="40px" alt="icono-profile" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            PROFILE
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;