import { createContext, useContext, useEffect, useState } from "react";

// Contexto
const infoContext = createContext();

// Hook personalizado para usar useContext
export const useInfo = () => {
    const context = useContext(infoContext);
    if (!context) throw new Error("There is no Info provider");
    return context;
}

export function InfoProvider({ children }) {
    // Estado de restaurante seleccionado, se usa en RestaurantCard.jsx
    const [restaurantSelected, setRestaurantSelected] = useState(null)//
    // Estado de producto seleccionado, se usa en Restaurant.jsx
    const [productSelected, setProductSelected] = useState(null)
    // Estado de restaurante a enviar a LS, se usa en Restaurant.jsx y Product.jsx
    const [restaurantToSend, setrestaurantToSend] = useState(null)


    useEffect(() => {
    }, []);
/*         useEffect(() => {

        }, []);
 */

        return (
            <infoContext.Provider
                value={{
                    restaurantSelected,
                    setRestaurantSelected,
                    productSelected,
                    setProductSelected,
                    restaurantToSend,
                    setrestaurantToSend
                }}
            >
                {children}
            </infoContext.Provider>
        );
    }

