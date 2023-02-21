import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import { useData } from '../context/DataContext';

const Orders = () => {
  const [ordersObtained, setOrdersObtained] = useState([]);
  const { getOrdersFromFirestore } = useData();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersFromFirestore();
      setOrdersObtained(orders);
    };
    fetchOrders();
  }, [getOrdersFromFirestore]);

  console.log(ordersObtained);

  return (
    <div>
      {ordersObtained.map((obj) => {
        <div>
          <img src={obj.logo} alt="Restaurant Logo" />
          <div>
            <p>obj.name</p>
            <p>obj.total</p>
          </div>
        </div>
      })}
      <Navbar />
    </div>
  );
};

export default Orders;
