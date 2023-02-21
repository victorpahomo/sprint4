import React from 'react'
import { useInfo } from '../context/HandleInfoContext'

const Product = () => {
  const {productSelected} = useInfo()

  return (
    <div>
      <img src={productSelected.image} alt="Product image" />
      <div>
      <h1>{productSelected.name}</h1>
      <p>{productSelected.cookingTime}</p>
      </div>

      <p>{productSelected.description}</p>
      <p>{productSelected.price}</p>

      
    </div>
  )
}

export default Product