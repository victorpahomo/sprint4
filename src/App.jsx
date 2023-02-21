import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Orders from './pages/Orders'
import { DataProvider } from './context/DataContext'
import Product from './pages/Product'
import { InfoProvider } from './context/HandleInfoContext'
import Restaurant from './pages/Restaurant'

function App() {

  return (


    <AuthProvider>
      <DataProvider>
        <InfoProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
            <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
            <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
            <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
            <Route path="/restaurant" element={<ProtectedRoute><Restaurant /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </InfoProvider>
      </DataProvider>
    </AuthProvider>
  )
}

export default App
