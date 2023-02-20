import React, { useState } from 'react'
import { Alert } from '../components/Alert';
import { useData } from '../context/DataContext';
import { useInfo } from '../context/HandleInfoContext'

const Product = () => {
  const { restaurantSelected } = useInfo()
  const { getRestaurant } = useData()
  const [restaurantObtained, setRestaurantObtained] = useState(null)

  const getRestaurantLocal = async () => {
    setRestaurantObtained(await getRestaurant(restaurantSelected));
  }
  getRestaurantLocal()




  return (
    <div>
      {!restaurantSelected? <Alert message={"No ha seleccionado un producto"}/>: 
      <>
         <img src={restaurantObtained.logo} alt="Restaurant Logo" /> 
         <img src={restaurantObtained.banner} alt="" />
         {/* <h1>{restaurantObtained.name}</h1> */}
      </>}
    </div>
  )
}

export default Product