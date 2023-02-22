import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { useInfo } from '../context/HandleInfoContext';
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const { productSelected, restaurantToSend } = useInfo();
  const [quantity, setQuantity] = useState(1); // Estado local para controlar la cantidad
  const [alertWarning, setAlertWarning] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)
  const navigate = useNavigate();

  const addToCart = () => {
    const { id, nameR, logo } = restaurantToSend;
    const { name, price, image, idItem } = productSelected;

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
          image: image
        });
      }
    } else {
      // Si no existe un pedido para este restaurante, creamos uno nuevo
      localStorage.clear();
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
          image: image
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
    <div className="flex flex-col items-center justify-center py-8">
      {alertSuccess && <Alert message='You added a product to Cart' color='green' />}
      {alertWarning && <Alert message='You added a product from another Restaurant, we deleted your previous order' color='orange' />}
      <img className="w-72 h-52 md:w-96 md:h-72 rounded-xl mb-4" src={productSelected.image} alt="Product image" />
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-medium mr-4">{productSelected.name}</h1>
        <p className="text-slate-500">{productSelected.cookingTime}</p>
      </div>
  
      <p className="text-slate-800 text-lg mb-4">{productSelected.description}</p>
      <p className="text-red-500 text-xl font-medium mb-6">$ {productSelected.price}</p>
  
      <div className="flex justify-between items-center w-full mb-8">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg" onClick={()=> {addToCart(); updateOrderTotal()}}>Agregar al carrito</button>
        <div className="flex items-center bg-gray-100 rounded-lg py-2 px-4">
          <button className="text-gray-700 font-medium" onClick={() => handleQuantityChange(-1)}>-</button>
          <span className="text-xl font-medium mx-4">{quantity}</span>
          <button className="text-gray-700 font-medium" onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
    </div>
  );
  
};

export default Product;
