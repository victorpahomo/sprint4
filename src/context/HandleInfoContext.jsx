import { createContext, useContext, useReducer, useEffect } from "react";

// Contexto
const infoContext = createContext();

// Hook personalizado para usar useContext
export const useInfo = () => {
    const context = useContext(infoContext);
    if (!context) throw new Error("There is no Info provider");
    return context;
};

const initialState = {
    restaurantSelected: null,
    productSelected: null,
    restaurantToSend: null,
    payCheck: false,
    dishToDetails: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_RESTAURANT_SELECTED":
            return { ...state, restaurantSelected: action.payload };
        case "SET_PRODUCT_SELECTED":
            return { ...state, productSelected: action.payload };
        case "SET_RESTAURANT_TO_SEND":
            return { ...state, restaurantToSend: action.payload };
        case "SET_PAY_CHECK":
            return { ...state, payCheck: action.payload };
        case "SET_DISH_TO_DETAILS":
            return { ...state, dishToDetails: action.payload };
        case "SET_STATE":
            return action.payload;
        default:
            throw new Error(`Unsupported action type: ${action.type}`);
    }
}

export function InfoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const storedState = localStorage.getItem("state");
        if (storedState) {
            dispatch({ type: "SET_STATE", payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <infoContext.Provider
            value={{
                restaurantSelected: state.restaurantSelected,
                setRestaurantSelected: (restaurant) =>
                    dispatch({ type: "SET_RESTAURANT_SELECTED", payload: restaurant }),
                productSelected: state.productSelected,
                setProductSelected: (product) =>
                    dispatch({ type: "SET_PRODUCT_SELECTED", payload: product }),
                restaurantToSend: state.restaurantToSend,
                setrestaurantToSend: (restaurant) =>
                    dispatch({ type: "SET_RESTAURANT_TO_SEND", payload: restaurant }),
                payCheck: state.payCheck,
                setpayCheck: (value) =>
                    dispatch({ type: "SET_PAY_CHECK", payload: value }),
                dishToDetails: state.dishToDetails,
                setDishToDetails: (dish) =>
                    dispatch({ type: "SET_DISH_TO_DETAILS", payload: dish }),
            }}
        >
            {children}
        </infoContext.Provider>
    );
}
