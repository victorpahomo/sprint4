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
    function minMaxTime() {
        let maxMinTime = -1;
        let maxMaxTime = -1;
        dishes[0].dishes.map((obj) => {
            maxMinTime = Math.max(maxMinTime, parseInt(obj.cookingTimeMin));
            maxMaxTime = Math.max(maxMaxTime, parseInt(obj.cookingTimeMax));
        })
        return { maxMinTime, maxMaxTime };
    }
    const { maxMinTime, maxMaxTime } = minMaxTime();
    

    return (
        <div className="p-10 w-screen">
            <div className='flex flex-col items-center w-full'>
                <h1 className="text-2xl mb-5">Current order</h1>
                <img src="https://res.cloudinary.com/dxwzyjefd/image/upload/v1677011767/sprint4/gui-images/time.png" alt="Time order" className="w-20 h-20 mb-3" />
                <p className="text-sm mb-5">{maxMinTime} - {maxMaxTime} min left</p>
                <div className='flex justify-evenly mb-5 w-full'>
                    {/* Circulos de estado */}

                    <div className='flex flex-col items-center'>
                        <svg className="w-6 h-6 stroke-2 stroke-white bg-yellow-1000 text-yellow-1000 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffff" >
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">Confirmed</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full'></div>
                        <p className="text-sm">Cooking</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full'></div>
                        <p className="text-sm">On the way</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-yellow-1000 text-yellow-1000 w-6 h-6 rounded-full'></div>
                        <p className="text-sm">Delievered</p>
                    </div>

                </div>
            </div>
            <div>
                {/* Dishes */}
                {dishes.map((obj) => {
                    return obj.dishes.map((dish) => {

                        return <div key={dish.id} className="flex items-center mb-5 gap-5">
                            <img src={dish.image} alt="Product image" className="w-16 h-16 rounded-lg" />

                            <p className="text-sm text-gray-500">x{dish.quantity}</p>
                            <p className="font-bold mb-1">{dish.name}</p>
                            <p className="text-sm mb-1">${dish.price * dish.quantity}</p>
                        </div>
                    })
                })}
            </div>
            <div>
                <div className='flex justify-around md:justify-between mb-5'>
                    <p className="text-sm font-bold">Products</p>
                    <p className="text-sm font-bold">{total}$</p>
                </div>
                <div className='flex justify-around md:justify-between mb-5'>
                    <p className="text-sm font-bold">Delivery</p>
                    <p className="text-sm font-bold">5000$</p>
                </div>
            </div>
            <div className='flex flex-col items-center p-4 h-screen'>
            <button onClick={handleClick} className="bg-yellow-1000 hover:bg-yellow-400 text-slate-800 text-lg md:text-xl py-2 px-4 mb-5 rounded-xl  fixed bottom-0 w-1/2 md:fixed none transform hover:scale-105 transition-all duration-200 ease-in-out">Go Home</button>
            </div>

        </div>
    )
}

export default CurrentOrder;
