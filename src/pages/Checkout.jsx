import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInfo } from '../context/HandleInfoContext'
import { useData } from '../context/DataContext'
const Checkout = () => {
  let orders = []
  orders = JSON.parse(localStorage.getItem('orders'))[0]
  let total = localStorage.getItem("total")
  const { setOrderToFirestore } = useData()
  const { setpayCheck } = useInfo()
  const navigate = useNavigate()

  // Combinar los valores en un objeto
  const ordersWithTotal = {
    ...orders, // Obtenemos el primer y único objeto del array
    total: total
  };

  console.log(ordersWithTotal);

  const handleClick = () => {
    setpayCheck(true)
    setOrderToFirestore(ordersWithTotal)
    navigate('/orderaccepted')
  }
  return (

    <div>

      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Checkout