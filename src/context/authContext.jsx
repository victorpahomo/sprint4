import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
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
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        console.log("Auth Provider loaded");
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

    }, [])


    return (
        <authContext.Provider value={{ signUp, login,logout, user,loading}}>
            {children}
        </authContext.Provider>
    )
}