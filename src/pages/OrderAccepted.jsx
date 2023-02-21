import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderAcepted = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/currentorder')
  }
  return (
    <>
    <div>
        <h1>Order is accepted</h1>
        <img src="" alt="" />

    </div>
    <div>
      <button onClick={handleClick}>Follow Order</button>
    </div>
    </>
  )
}

export default OrderAcepted