import React from "react";
import { useNavigate } from "react-router-dom";

const OrderAccepted = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/currentorder");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center font-bold mb-4 md:text-4xl">Order is accepted</h1>
      <img
        className="w-full md:w-1/2 mb-4"
        src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027720/sprint4/gui-images/done.png"
        alt="Order done image"
      />
      <button
        className="bg-yellow-1000 hover:bg-yellow-400 text-slate-800 font-bold text-lg md:text-xl py-2 px-4  fixed bottom-0 w-full md:fixed none transform hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        Follow Order
      </button>
    </div>
  );
};

export default OrderAccepted;