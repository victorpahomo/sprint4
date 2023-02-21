import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../api/firebase";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where } from "firebase/firestore"

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

    /*     const getRestaurant = async (id) => {
            try {
                const docRef = doc(db, "restaurant", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    return docSnap.data();
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        } */

    const findCategory = async (category) => {
        // Create a reference to the restaurant collection
        const restaurantRef = collection(db, "restaurant");

        // Create a query against the collection
        const q = query(restaurantRef, where("food-categories", "array-contains", category));

        // Get the documents that match the query
        const querySnapshot = await getDocs(q);

        // Return an array with the documents data
        return querySnapshot.docs.map((doc) => doc.data());
    }

    const findDishCategory = async (_category) => {
        console.log(_category);
        // Create a reference to the restaurant collection
        const restaurantRef = collection(db, "restaurant");
        const q = query(restaurantRef, where('menu', 'array-contains', { category: "pizza" }))

        // Get the documents that match the query
        const querySnapshot = await getDocs(q);

        // Return an array with the documents data
        return querySnapshot.docs.map((doc) => doc.data());

        
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
                findCategory,
                findDishCategory,
            }}
        >
            {children}
        </dataContext.Provider>
    );
}

