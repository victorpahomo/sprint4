import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import Profile from './pages/Profile'
import { DataProvider } from './context/DataContext'
import Product from './pages/Product'

function App() {

  return (
    <DataProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
          <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </DataProvider>
  )
}

export default App
