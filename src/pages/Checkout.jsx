import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../context/HandleInfoContext";
import { useData } from "../context/DataContext";

const Checkout = () => {
  let orders = [];
  orders = JSON.parse(localStorage.getItem("orders"))[0];
  let total = localStorage.getItem("total");
  const { setOrderToFirestore } = useData();
  const { setpayCheck } = useInfo();
  const navigate = useNavigate();
  const [totalOrder, setTotalOrder] = useState(
    localStorage.getItem("total") ?? 0
  );
  // Combinar los valores en un objeto
  const ordersWithTotal = {
    ...orders, // Obtenemos el primer y único objeto del array
    total: total,
  };

  const handleClick = () => {
    setpayCheck(true);
    setOrderToFirestore(ordersWithTotal);
    navigate("/orderaccepted");
  };

  return (
    <div className=" p-4 md:p-8">

      <img
        className="w-1/2 h-22 md:w-80 mb-4"
        src={ordersWithTotal.logo}
        alt=""
      />

      <div className="flex gap-4 pb-4 md:">
        {ordersWithTotal.dishes.map((object) => {
          const id = object.id;
          const image = object.image;
          const name = object.name;
          const price = object.price;
          const quantity = object.quantity;
          let totalOrderPrice = 0;
          const totalUnitPrice = price * quantity;
          totalOrderPrice += totalUnitPrice;
          console.log((totalOrderPrice += totalUnitPrice));
          return (
            <div
              key={id + Date.now()}
              className="flex items-center justify-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
            >
              <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer ">
                <div className="flex items-center gap-8 w-screen">
                  <img
                    className="rounded-lg w-24 h-24 md:w-32 md:h-32"
                    src={image}
                    alt={name}
                  />
                  <div className="flex flex-col gap-5">
                    <p className="text-slate-800">{name}</p>
                    <div className="flex gap-1">
                      <p className="text-slate-500">${price}</p>
                      <p className="text-slate-500">x {quantity} =</p>
                      <p className="text-yellow-700"> ${price * quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="fixed bottom-0 left-0 right-0 mx-auto w-full h-12 md:h-16 bg-yellow-1000 hover:bg-yellow-400 text-slate-800 font-bold text-lg md:text-xl flex items-center justify-center transform hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        <div className="flex gap-2 items-center sm:w-1/2 sm:flex sm:justify-center sm:items-center">
          <span>Place Order</span>
          <div className="sm:fixed sm:right-5 bg-yellow-400 rounded-xl sm:p-1">
            Total: ${totalOrder}
          </div>
        </div>
      </button>
    </div>
  );
};
export default Checkout;