import React from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../layout/Navbar'
import { useData } from '../context/DataContext'

const Profile = () => {

  const { logout, user } = useAuth()

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
/* 
  const data = {
    5: {

      name: "Restaurant Prueba",
      description: "Restaurant de prueba"
    }
    saveData(data)
  } */
  
  

  return (
    <div>
      <h1>Welcome {user.displayName || user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
      <Navbar />
    </div>

  )
}

export default Profile