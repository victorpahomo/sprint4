import React, { useState } from 'react';
import { useInfo } from '../context/HandleInfoContext';

const Product = () => {
  const { productSelected, restaurantToSend } = useInfo();
  console.log(productSelected);
  const [quantity, setQuantity] = useState(1); // Estado local para controlar la cantidad

  const addToCart = () => {
    const { id, nameR, logo } = restaurantToSend;
    const { name, price, image, idItem } = productSelected;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Buscamos si ya hay un pedido con el mismo id
    let existingOrder = orders.find(order => order.dishes.some(dish => dish.id === idItem));

    const newOrder = {
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
    };
    if (existingOrder) {
      // Si ya existe un pedido con el mismo id, actualizamos la cantidad
      existingOrder.dishes.find(dish => dish.id === idItem).quantity += quantity;
    } else {
      // Si no existe, agregamos el nuevo pedido al arreglo
      orders.push(newOrder);
    }

    // Almacenamos el arreglo actualizado en el localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Recalculamos el total después de agregar o actualizar un pedido
    const total = calculateTotal(orders);
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
        <button onClick={addToCart}>Agregar al carrito</button>
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
