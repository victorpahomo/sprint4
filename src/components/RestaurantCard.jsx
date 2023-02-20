import React from 'react'
import { useData } from '../context/DataContext'
import { useInfo } from '../context/HandleInfoContext'
import { useNavigate } from 'react-router-dom'
const RestaurantCard = () => {
    const { saveData, updatedDbFirestore,encontrarCategoria } = useData()
    const {setRestaurantSelected} = useInfo()
    const navigate = useNavigate()
/*     //USando Query  
    const prueba = async () => {
        console.log(await encontrarCategoria("snacks"));
    }
    prueba()
    console.log(updatedDbFirestore);
     */

    const handleClick = (key) => {
        setRestaurantSelected(key)
        navigate("/product")
    }
   
    return (
        <div>
            {
                updatedDbFirestore && Object.keys(updatedDbFirestore).map((key) => {
                    return (
                        <div onClick={()=>handleClick(updatedDbFirestore[key].id)} key={key}>
                            <img src={updatedDbFirestore[key].banner} alt="" />
                            <h1>{updatedDbFirestore[key].name}</h1>
                            <h1>{updatedDbFirestore[key].stars}</h1>
                            <h1>{updatedDbFirestore[key].schedule}</h1>
                            <p>{updatedDbFirestore[key].description}</p>
                        </div>
                    )
                })
                
            }
            <h1></h1>
        </div>
    )
}

export default RestaurantCard