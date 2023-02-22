import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { useData } from '../context/DataContext';
import { useInfo } from '../context/HandleInfoContext';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { getOrdersFromFirestore } = useData();
  const navigate = useNavigate();
  const { setDishToDetails } = useInfo();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersFromFirestore();
      setOrders(orders);
    };
    fetchOrders();
  }, [getOrdersFromFirestore]);

  const handleOrderClick = (order) => {
    setDishToDetails(order);
    navigate('/orderDetails');
  };

  return (
<div className="container mx-auto px-4 py-6 mb-4">
  <h2 className="text-3xl font-bold mb-6">Órdenes</h2>
  <div className="grid grid-cols-1 gap-6">
    {orders.map((order, index) => {
      return (
        <div
          className="bg-white rounded-lg shadow-md flex items-center px-6 py-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          onClick={() => handleOrderClick(order)}
          key={index}
        >
          <img src={order.logo} alt="Logo del restaurante" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="font-bold text-gray-800">{order.name}</p>
            <p className="text-gray-600">${order.total}</p>
          </div>
        </div>
      );
    })}
  </div>
  <Navbar />
</div>
  );
};

export default Orders;
