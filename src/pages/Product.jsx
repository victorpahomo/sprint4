import React, { useState } from 'react';
import { useInfo } from '../context/HandleInfoContext';

const Product = () => {
  const { productSelected, restaurantToSend } = useInfo();
  const [quantity, setQuantity] = useState(1); // Estado local para controlar la cantidad

  const addToCart = () => {
    const { id, nameR, logo } = restaurantToSend;
    const { name, price, image, idItem } = productSelected;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Buscamos si ya hay un pedido con el mismo id de restaurante
    let existingOrder = orders.find(order => order.id === id);

    if (existingOrder) {
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
      orders.push({
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
    <div>
      <img src={productSelected.image} alt="Product image" />
      <div>
        <h1>{productSelected.name}</h1>
        <p>{productSelected.cookingTime}</p>
      </div>

      <p>{productSelected.description}</p>
      <p>{productSelected.price}</p>

      <div>
        <button onClick={()=> {addToCart(); updateOrderTotal()}}>Agregar al carrito</button>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
