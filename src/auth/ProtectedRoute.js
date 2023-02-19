import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
// This component is used to protect the routes that are only accessible to authenticated users
export function ProtectedRoute({ children }) {
    const {user,loading} = useAuth()

    if(loading) return <div>Loading...</div>
    if(!user) return <Navigate to="/login" />
    return <>{children}</>
    
}