import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { useInfo } from '../context/HandleInfoContext';
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const { productSelected, restaurantToSend, setpayCheck} = useInfo();
  const [quantity, setQuantity] = useState(1); // Estado local para controlar la cantidad
  const [alertWarning, setAlertWarning] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)
  const navigate = useNavigate();
  
  const addToCart = () => {
    const { id, nameR, logo } = restaurantToSend;
    const { name, price, image, idItem, cookingTimeMin,cookingTimeMax} = productSelected;
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let newOrders = [];//Array vacio en caso de que ya exita un pedido para el restaurante seleccionado
    // Buscamos si ya hay un pedido con el mismo id de restaurante
    let existingOrder = orders.find(order => order.id === id);

    if (existingOrder) {
      
      setAlertSuccess(true)//muestra un mensaje de exito

      // Restablece el valor de alertWarning a false después de 2 segundos
      setTimeout(() => {
        setAlertSuccess(false);
        navigate("/restaurant");

      }, 2000);
      // Si ya existe un pedido para este restaurante, agregamos el nuevo plato a su arreglo de platos
      let existingDish = existingOrder.dishes.find(dish => dish.id === idItem);

      if (existingDish) {
        // Si ya existe el mismo plato, actualizamos la cantidad
        existingDish.quantity += quantity;
      } else {
        // Si no existe el mismo plato, lo agregamos al arreglo
        existingOrder.dishes.push({
          id: idItem,
          quantity: quantity,
          name: name,
          price: price,
          image: image,
          cookingTimeMin: cookingTimeMin,
          cookingTimeMax: cookingTimeMax
        });
      }
    } else {
      // Si no existe un pedido para este restaurante, creamos uno nuevo
      localStorage.removeItem("orders");
      localStorage.removeItem("total");
      localStorage.removeItem("totalItems");
      setpayCheck(false);
      setAlertWarning(true)//muestra un mensaje de advertencia

      // Restablece el valor de alertWarning a false después de 2 segundos
      setTimeout(() => {
        setAlertWarning(false);
        navigate("/restaurant");
      }, 2000);

      newOrders.push({
        id: id,
        name: nameR,
        logo: logo,
        dishes: [{
          id: idItem,
          quantity: quantity,
          name: name,
          price: price,
          image: image,
          cookingTimeMin: cookingTimeMin,
          cookingTimeMax: cookingTimeMax
        }]
      });
      orders = newOrders;

    }

    // Almacenamos el arreglo actualizado en el localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Recalculamos el total después de agregar o actualizar un pedido
    const total = calculateTotal(orders.filter(order => order.id === id));
    localStorage.setItem('total', JSON.stringify(total));
  }

  const handleQuantityChange = (amount) => {
    if (amount === -1 && quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(prevQuantity => prevQuantity + amount); // Actualiza el estado local de la cantidad
    }
  };

  const calculateTotal = (orders) => {
    let total = 0;
    orders.forEach(order => {
      order.dishes.forEach(dish => {
        total += dish.price * dish.quantity;
      });
    });
    return total;
  };

  const updateOrderTotal = () => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let totalItems = orders.reduce((acc, order) => acc + order.dishes.reduce((acc, dish) => acc + dish.quantity, 0), 0);
    localStorage.setItem("totalItems", totalItems);
  };
  

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      {alertSuccess && (
        <Alert message="You added a product to Cart" color="green" />
      )}
      {alertWarning && (
        <Alert
          message="You added a product from another Restaurant, we deleted your previous order"
          color="orange"
        />
      )}
      <div className="justify-center items-center flex flex-wrap  w-11/12 gap-2 mt-1 md:grid md:grid-cols-2">
        <img
          className="flex w-3/4 rounded-lg"
          src={productSelected.image}
          alt="Product image"
        />
        <div className="flex justify-between w-full pl-5 pr-5 md:flex md:flex-col md:h-64 md:mt-3 md:items-center">
          <h1 className="text-2xl">{productSelected.name}</h1>
          <p className="hidden md:block md:w-full md:text-left">
            {productSelected.description}
          </p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className='pl-2'>
              {productSelected.cookingTimeMin}-{productSelected.cookingTimeMax}{" "}
              min
            </span>
          </div>
        </div>
        <p className="w-full text-left block md:hidden">
          {productSelected.description}
        </p>
        <div className="fixed bottom-5 w-full h-10 bg-white z-50">
          <div className="flex justify-between w-11/12 h-10">
            <div className="flex justify-around w-1/2 items-center">
              <button onClick={() => handleQuantityChange(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-2xl">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <button
              className="w-1/2 bg-yellow-1000 rounded-xl flex justify-around items-center hover:bg-yellow-400"
              onClick={() => {
                addToCart();
                updateOrderTotal();
              }}
            >
              <span>Add</span>
              <div>${productSelected.price}</div>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Product;
