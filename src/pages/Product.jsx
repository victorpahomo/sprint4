import React, { useState } from 'react'
import { useInfo } from '../context/HandleInfoContext'

const Product = () => {
  const {productSelected} = useInfo()
  console.log(productSelected);
  const [quantity, setQuantity] = useState(1); // Estado local para controlar la cantidad

  const addToCart = () => {
    const { name, price, image, idItem } = productSelected;
  
    const newOrder = {
      id: idItem,
      quantity: quantity,
      name: name,
      price: price,
      image: image
    };
  
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
  
    // Buscamos si ya hay un pedido con el mismo id
    let existingOrder = orders.find(order => order.id === idItem);
  
    if (existingOrder) {
      // Si ya existe un pedido con el mismo id, actualizamos la cantidad
      existingOrder.quantity += quantity;
    } else {
      // Si no existe, agregamos el nuevo pedido al arreglo
      orders.push(newOrder);
    }
  
    // Almacenamos el arreglo actualizado en el localStorage
    localStorage.setItem("orders", JSON.stringify(orders));
  }
  

  const handleQuantityChange = (amount) => {
    if(amount == -1 && quantity == 1 ){
      setQuantity(1)
      return
    }else{
      setQuantity(prevQuantity => prevQuantity + amount); // Actualiza el estado local de la cantidad
    }
  }

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
        <button onClick={() => addToCart()}>Agregar al carrito</button>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product
