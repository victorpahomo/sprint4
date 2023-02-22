import React from 'react'
import { useInfo } from '../context/HandleInfoContext';
import Navbar from '../layout/Navbar';

const OrderDetails = () => {
    const { dishToDetails } = useInfo();
    console.log(dishToDetails)

  return (
    <div className="container mx-auto px-4 sm:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
      Orders
    </h1>
    {dishToDetails.dishes.map((dish, index) => {
      return (
        <div
          key={index}
          className="flex sm:flex-row items-center justify-between mb-4 sm:mb-6 md:mb-8"
        >
          <div className="flex gap-2">
            <p className="text-base sm:text-lg md:text-xl text-slate-400">
              {dish.quantity} x
            </p>
            <p className="text-base sm:text-lg md:text-xl">{dish.name}</p>
          </div>
          <div>
            <p className="text-base sm:text-lg md:text-xl">${dish.price}</p>
          </div>
        </div>
      );
    })}
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex justify-between w-full sm:mb-6 md:mb-8">
        <p className="text-base sm:text-xl md:text-2xl font-semibold">
          Production cost
        </p>
        <p className="text-base sm:text-xl md:text-2xl">
          ${dishToDetails.total}
        </p>
      </div>
      <div className="flex justify-between w-full sm:mb-6 md:mb-8">
        <p className="text-base sm:text-xl md:text-2xl font-semibold">
          Cost of delivery
        </p>
        <p className="text-base text-black sm:text-xl md:text-2xl">$5000</p>
      </div>
      <hr className="w-full border-1 border-black" />
      <div className="flex justify-between w-full mb-4 sm:mb-6 md:mb-8">
        <p className="text-base sm:text-xl md:text-2xl font-semibold">Total</p>
        <p className="text-base sm:text-xl md:text-2xl">
          ${parseInt(dishToDetails.total) + 5000}
        </p>
      </div>
    </div>
    <Navbar />
  </div>
  )
}

export default OrderDetails