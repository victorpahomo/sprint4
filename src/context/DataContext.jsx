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


    const saveData = async (data) => {
        try {
            await addDoc(collection(db, "restaurant"), data);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        const getDbFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "restaurant"));
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setDbFirestore(docs)

            } catch (error) {
                console.log(error);
            }
        }
        getDbFirestore()
        console.log(dbFirestore);
    }, []);


    return (
        <dataContext.Provider
            value={{
                saveData,
            }}
        >
            {children}
        </dataContext.Provider>
    );
}

