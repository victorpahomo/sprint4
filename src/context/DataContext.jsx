import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../api/firebase";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore"

// Contexto
const dataContext = createContext();

// Hook personalizado para usar useContext
export const useData = () => {
    const context = useContext(dataContext);
    if (!context) throw new Error("There is no Data provider");
    return context;
}

export function DataProvider({ children }) {
    /*     const [data, setData] = useState({})// Estado de los datos
     *//*     const [loading, setLoading] = useState(true)// Estado de carga
   */
    const [dbFirestore, setDbFirestore] = useState([])
    // Creamos una variable de estado adicional para almacenar la información actualizada
    const [updatedDbFirestore, setUpdatedDbFirestore] = useState([]);

    const saveData = async (data) => {
        try {
            await addDoc(collection(db, "restaurant"), data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async (id, data) => {
        try {
            await setDoc(doc(db, "restaurant", id), data);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        console.log("Primer paso antes AWAIT");
        const getDbFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "restaurant"));
                const docs = []
                console.log("Segundo paso despues AWAIT");
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setDbFirestore(docs)
                setUpdatedDbFirestore(docs) // Inicializamos la variable actualizada con la información original
            } catch (error) {
                console.log(error);
            }
        }
        getDbFirestore()
    }, []);


    return (
        <dataContext.Provider
            value={{
                saveData,
                updatedDbFirestore,
            }}
        >
            {children}
        </dataContext.Provider>
    );
}

