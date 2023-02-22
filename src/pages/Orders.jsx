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
    <div>
      <p>Órdenes</p>
      {orders.map((order, index) => {
        return (
          <div onClick={() => handleOrderClick(order)} key={index}>
            <img src={order.logo} alt="Logo del restaurante" />
            <div>
              <p>{order.name}</p>
              <p>{order.total}</p>
            </div>
          </div>
        );
      })}
      <Navbar />
    </div>
  );
};

export default Orders;
