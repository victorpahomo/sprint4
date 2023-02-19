import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './auth/ProtectedRoute'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <ProtectedRoute>
          <Route path="/" element={<Home />} />
        </ProtectedRoute>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
