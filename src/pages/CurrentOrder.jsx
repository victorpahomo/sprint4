import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CurrentOrder = () => {
    const orders = localStorage.getItem('orders');
    const [dishes, setDishes] = useState(orders ? JSON.parse(orders) : []);
    const [total, setTotal] = useState(localStorage.getItem('total') ?? 0);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Current order</h1>
            <img src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677011767/sprint4/gui-images/time.png" alt="Time order" />
            <p>15 - 20 min left</p>
            <div>
                {/* Circulos de estado */}
            </div>
            <div>
                {/* Dishes */}
                {dishes.map((obj) => {
                    return obj.dishes.map((dish) => {

                        return <div key={dish.id}>
                                <img src={dish.image} alt="Product image" /> 
                                <p>x{dish.quantity}</p>
                                <p>{dish.name}</p> 
                                <p>${dish.price*dish.quantity}</p>
                                </div>
                    })
                })}
            </div>
            <div>
                <div className='flex justify-around'>
                    <p>Products</p> 
                    <p>{total}$</p> 
                </div>
                <div className='flex justify-around'>
                    <p>Delivery</p>
                    <p>5000$</p>
                </div>
                <div className='flex justify-around'>
                    <p>Total</p>
                    <p>{parseInt(total)+5000}$</p>
                </div>
            </div>
            <button onClick={handleClick}>Go Home</button>
        </div>
    )
}

export default CurrentOrder;
