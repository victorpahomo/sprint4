import React from "react";
import { useNavigate } from "react-router-dom";

const OrderAccepted = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/currentorder");
  };
  return (
    <div className="flex flex-col items-center p-4 h-screen">
      <h1 className="text-center text-2xl md:text-3xl">Order is accepted</h1>
      <img
        className="w-1/2 mt-20 md:w-1/3 mb-4"
        src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027720/sprint4/gui-images/done.png"
        alt="Order done image"
      />
      <button
        className="bg-yellow-1000 hover:bg-yellow-400 text-slate-800 text-lg md:text-xl py-2 px-4 mb-5 rounded-xl  fixed bottom-0 w-1/2 md:fixed none transform hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        Follow Order
      </button>
    </div>
  );
};

export default OrderAccepted;