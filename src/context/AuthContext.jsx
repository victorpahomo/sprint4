import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth"
import { auth, db } from "../api/firebase";
import { doc, setDoc } from "firebase/firestore";
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
       const userInfo = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {return userCredential})
      const docuRef = doc(db,`users/${userInfo.user.uid}`);
      setDoc(docuRef, {email:email, rol:"user",orders:[] });
    }
    // Iniciar sesion
    const login =  async (email, password) => {
       await signInWithEmailAndPassword(auth, email, password)
    }
    // Cerrar sesion
    const logout =  () => {
        signOut(auth)
    }

    const loginWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        const userInfo = await signInWithPopup(auth, googleProvider)
        const docuRef = doc(db,`users/${userInfo.user.uid}`);
        setDoc(docuRef, {email:userInfo.user.email, rol:"user",orders:[] });
    }

    const loginWithFacebook = async () => {
        const facebookProvider = new FacebookAuthProvider();
        const userInfo = await signInWithPopup(auth, facebookProvider)
        const docuRef = doc(db,`users/${userInfo.user.uid}`);
        setDoc(docuRef, {email:userInfo.user.email, rol:"user",orders:[] });
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