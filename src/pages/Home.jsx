import React from 'react'
import { useAuth } from '../context/authContext'

const Home = () => {

    const {user,logout,loading} = useAuth()

    const handleLogout = async () => {
        await logout()
    }

    if(loading) {
      return <h1>Loading</h1>
    }

  return (
    <div>
         <h1>Welcome {user.email}</h1>
         <button onClick={handleLogout}>Logout</button>
    </div>
 
  )
}

export default Home