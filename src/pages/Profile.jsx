import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../layout/Navbar'

const Profile = () => {

    const {logout,user} = useAuth()

    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error.message);
      }
    };


  return (
    <div>
         <h1>Welcome {user.displayName || user.email}</h1>
         <button onClick={handleLogout}>Logout</button>
         <Navbar />
    </div>
 
  )
}

export default Profile