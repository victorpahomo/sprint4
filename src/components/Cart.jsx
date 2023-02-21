import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [totalItems, setTotalItems] = useState(localStorage.getItem('totalItems') ?? 0);
  const [total, setTotal] = useState(localStorage.getItem('total') ?? 0);
  const navigate = useNavigate();
  console.log(totalItems);

    const handleClick = () => { 
      navigate('/checkout');
    }
  return (
    <div onClick={handleClick} className='bg-slate-500'>
      <p>{totalItems}</p>
      <p>Vie Card</p>
      <p>{total}</p>
    </div>
  )
}

export default Cart