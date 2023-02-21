import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useInfo } from '../context/HandleInfoContext'

const Checkout = () => {
    const { setpayCheck } = useInfo()
    const navigate = useNavigate()

    const handleClick = () => {
        setpayCheck(true)
        navigate('/orderaccepted')
    }
  return (

    <div>

        <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Checkout