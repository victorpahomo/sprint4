import React from 'react'
import { useInfo } from '../context/HandleInfoContext';
import Navbar from '../layout/Navbar';

const OrderDetails = () => {
    const { dishToDetails } = useInfo();
    console.log(dishToDetails)

  return (
    <div>
        <h1>Orders</h1>
        {dishToDetails.dishes.map((dish, index) => {
            return (
                <div key={index}>
                    <div>
                        <p>{dish.quantity}</p>
                        <p>{dish.name}</p>
                        <p>{dish.price}</p>
                    </div>
                </div>
            )
        })}
        <div>
            <div>
            <p>Production cost</p>
            <p>${dishToDetails.total}</p>
            </div>
            <div>
            <p>Cost of delivery</p>
                <p>$5000</p>
            </div>
            <div>
            <p>Total</p>
            <p>${parseInt(dishToDetails.total)+5000}</p>
            </div>
                
        </div>
        <Navbar />
    </div>
  )
}

export default OrderDetails