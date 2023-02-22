import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderAccepted = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/currentorder')
  }
  return (
    <>
    <div>
        <h1>Order is accepted</h1>
        <img src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677027720/sprint4/gui-images/done.png" alt="Order done image" />

    </div>
    <div>
      <button onClick={handleClick}>Follow Order</button>
    </div>
    </>
  )
}

export default OrderAccepted