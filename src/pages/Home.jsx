import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'

const Home = () => {
/*     const {user} = useAuth()
    console.log(user); */
    const {user,logout,loading} = useAuth()
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = async () => {
        await logout()
        navigate("/login")
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