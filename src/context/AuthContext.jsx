import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth"
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

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
        }


    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
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
            loginWithFacebook,
          }}
        >
          {children}
        </authContext.Provider>
      );
}