import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../api/firebase";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where, updateDoc, arrayUnion } from "firebase/firestore"
import { useAuth } from "./AuthContext";
// Contexto
const dataContext = createContext();

// Hook personalizado para usar useContext
export const useData = () => {
    const context = useContext(dataContext);
    if (!context) throw new Error("There is no Data provider");
    return context;
}

export function DataProvider({ children }) {
    // Creamos una variable de estado para almacenar la información de la base de datos
    const [dbFirestore, setDbFirestore] = useState([])
    // Creamos una variable de estado adicional para almacenar la información actualizada
    const [updatedDbFirestore, setUpdatedDbFirestore] = useState([]);

    const { user } = useAuth(); // lo usaremos para editar la información de la base de datos    

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

    const setOrderToFirestore = async (data) => {
        const docRef = doc(db, 'users', user.uid);
        try {
          await updateDoc(docRef, {
            orders: arrayUnion(data)
          });
          console.log('El campo fue actualizado exitosamente.');
        } catch (error) {
          console.error('Error al actualizar el campo:', error);
        }
      };

      const getOrdersFromFirestore = async () => {
        const docRef = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const orders = docSnap.get('orders');
            return orders;
          } else {
            console.log('No se encontró el documento en Firestore');
            return null;
          }
        } catch (error) {
          console.error('Error al obtener datos de Firestore:', error);
          return null;
        }
      };



    useEffect(() => {
        const getDbFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "restaurant"));
 /*                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                }); */
                setDbFirestore(querySnapshot.docs.map((doc) => doc.data()))
                setUpdatedDbFirestore(querySnapshot.docs.map((doc) => doc.data())) // Inicializamos la variable actualizada con la información original
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
                setOrderToFirestore,
                getOrdersFromFirestore,
            }}
        >
            {children}
        </dataContext.Provider>
    );
}

