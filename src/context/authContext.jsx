import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../api/firebase";
// Contexto
export const authContext = createContext();

// Hook personalizado para usar useContext
export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

// Provider
export function AuthProvider({ children }) {
    const user = {
        login:true,
    }
    const signUp = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
    }
    return (
        <authContext.Provider value={{signUp}}>
            {children}
        </authContext.Provider>
    )
}