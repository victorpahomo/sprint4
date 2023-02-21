import React from 'react'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/orderaccepted')
    }
  return (

    <div>

        <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Checkout