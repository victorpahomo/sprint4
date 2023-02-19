import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../api/firebase";
// Contexto
const authContext = createContext();

// Hook personalizado para usar useContext
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
}

// Provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)// Estado del usuario
    const [loading, setLoading] = useState(true)// Estado de carga

    // Registrar usuario
    const signUp = async (email, password) => {
       await createUserWithEmailAndPassword(auth, email, password)

    }
    // Iniciar sesion
    const login =  async (email, password) => {
       await signInWithEmailAndPassword(auth, email, password)
    }
    // Cerrar sesion
    const logout =  () => {
        signOut(auth)
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubuscribe();
      }, []);


      return (
        <authContext.Provider
          value={{
            signUp,
            login,
            user,
            logout,
            loading,
            loginWithGoogle,
          }}
        >
          {children}
        </authContext.Provider>
      );
}