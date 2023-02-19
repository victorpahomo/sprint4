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
    const [user, setUser] = useState(null)// Estado del usuario
    const [loading, setLoading] = useState(true)// Estado de carga

    // Registrar usuario
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    // Iniciar sesion
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    // Cerrar sesion
    const logout = () => {
        signOut(auth)
    }

    // Verificar si el usuario esta logueado
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe();
    }, [])


    return (
        // Pasamos los valores al contexto
        <authContext.Provider value={{ signUp, login,logout, user,loading}}>
            {children}
        </authContext.Provider>
    )
}