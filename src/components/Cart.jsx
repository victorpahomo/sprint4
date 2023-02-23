import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../context/HandleInfoContext";

const Cart = () => {
  const [showComponent, setShowComponent] = useState(false);
  const { payCheck } = useInfo();
  const [totalItems, setTotalItems] = useState(
    localStorage.getItem("totalItems") ?? 0
  );
  const [total, setTotal] = useState(localStorage.getItem("total") ?? 0);
  const navigate = useNavigate();
  console.log(totalItems);

  const handleClick = () => {
    if (payCheck === false) {
      navigate("/checkout");
    } else {
      navigate("/currentorder");
    }
  };

  useEffect(() => {
    // Actualizar el estado de showComponent cada vez que cambia totalItems
    setShowComponent(totalItems > 0);
  }, [totalItems]);

  return showComponent ? (
    <div
      onClick={handleClick}
      className="fixed bottom-10 rounded-lg left-0 right-10 bg-yellow-1000 p-3 flex justify-between items-center cursor-pointer hover:bg-yellow-400 "
    >
      <div className="flex w-6 h-5 bg-slate-700 text-center justify-center items-center rounded-md text-white">
        <p>{totalItems}</p>
      </div>
      <p>View Cart</p>
      <p>$ {total}</p>
    </div>
  ) : null;
};

export default Cart;