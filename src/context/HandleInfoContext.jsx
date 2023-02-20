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

    const [restaurantSelected, setRestaurantSelected] = useState(null)

/*         useEffect(() => {

        }, []);
 */

        return (
            <infoContext.Provider
                value={{
                    restaurantSelected,
                    setRestaurantSelected,
                }}
            >
                {children}
            </infoContext.Provider>
        );
    }

