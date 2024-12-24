import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import Captainsignup from './pages/Captainsignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = '/login' element={<Userlogin />} />
        <Route path = '/signup' element={<UserSignup />} />
        <Route path = '/captain-login' element={<CaptainLogin />} />
        <Route path = '/captain-signup' element={<Captainsignup />} />
      </Routes>
    </div>
  )
}

export default App