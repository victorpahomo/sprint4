import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
// This component is used to protect the routes that are only accessible to authenticated users
export function ProtectedRoute({ children }) {
    const {user,loading} = useAuth()
    console.log("Me ejecuto protected");

    console.log(user,loading);

    if (loading) return <h1>Loading</h1>;

    if (!user) return <Navigate to="/login" />;
  
    return <>{children}</>;
    
}