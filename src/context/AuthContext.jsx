import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth"
import { auth, db } from "../api/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
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

    // Cerrar sesion
    const logout =  () => {
        signOut(auth)
    }
    const login = async (email, password) => {
          // Obtiene una referencia al documento del usuario en Firestore
      const docuRef = await signInWithEmailAndPassword(auth, email, password)
      
      // Comprueba si el usuario ya existe en Firestore
      const docSnap = await getDoc(docuRef);
      if (docSnap.exists()) {
        // Si el usuario ya existe, no se crea un nuevo documento
        console.log("El usuario ya está registrado en Firestore.");
      } else {
        // Si el usuario no existe, se crea un nuevo documento con su información
        await setDoc(docuRef, {
          email: userInfo.user.email,
          rol: "user",
          orders: []
        });
        console.log("Se ha creado un nuevo documento en Firestore para el usuario.");
      }
    };

    // Iniciar sesion con Google 
    const loginWithGoogle = async () => {
      // Crea una instancia del proveedor de autenticación de Google
      const googleProvider = new GoogleAuthProvider();
      
      // Inicia sesión con Google
      const userInfo = await signInWithPopup(auth, googleProvider)
      
      // Obtiene una referencia al documento del usuario en Firestore
      const docuRef = doc(db,`users/${userInfo.user.uid}`);
      
      // Comprueba si el usuario ya existe en Firestore
      const docSnap = await getDoc(docuRef);
      if (docSnap.exists()) {
        // Si el usuario ya existe, no se crea un nuevo documento
        console.log("El usuario ya está registrado en Firestore.");
      } else {
        // Si el usuario no existe, se crea un nuevo documento con su información
        await setDoc(docuRef, {
          email: userInfo.user.email,
          rol: "user",
          orders: []
        });
        console.log("Se ha creado un nuevo documento en Firestore para el usuario.");
      }
    };

    const loginWithFacebook = async () => {
      // Crea una instancia del proveedor de autenticación de Facebook
      const facebookProvider = new FacebookAuthProvider();
      
      // Inicia sesión con Facebook
      const userInfo = await signInWithPopup(auth, facebookProvider);
      
      // Obtiene una referencia al documento del usuario en Firestore
      const docuRef = doc(db, `users/${userInfo.user.uid}`);
      
      // Comprueba si el usuario ya existe en Firestore
      const docSnap = await getDoc(docuRef);
      if (docSnap.exists()) {
        // Si el usuario ya existe, no se crea un nuevo documento
        console.log("El usuario ya está registrado en Firestore.");
      } else {
        // Si el usuario no existe, se crea un nuevo documento con su información
        await setDoc(docuRef, {
          email: userInfo.user.email,
          rol: "user",
          orders: []
        });
        console.log("Se ha creado un nuevo documento en Firestore para el usuario.");
      }
    };


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