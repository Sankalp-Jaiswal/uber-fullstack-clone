import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import Captainsignup from './pages/Captainsignup'
import Dashboard from './pages/Dashboard'
import UserWrapper from './pages/UserWrapper'
import Userlogout from './pages/Userlogout'
import CaptainDashboard from './pages/CaptainDashboard'
import CaptainLogout from './pages/CaptainLogout'
import CaptainWrapper from './pages/CaptainWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = '/login' element={<Userlogin />} />
        <Route path = '/signup' element={<UserSignup />} />
        <Route path = '/captain-login' element={<CaptainLogin />} />
        <Route path = '/captain-signup' element={<Captainsignup />} />
        <Route path='/home' element={<UserWrapper><Dashboard /></UserWrapper>} />
        <Route path= '/user/logout' element={<UserWrapper><Userlogout /></UserWrapper>} />
        <Route path='/captain-home' element={<CaptainWrapper><CaptainDashboard /></CaptainWrapper>} />
        <Route path='/captain/logout' element={<CaptainWrapper><CaptainLogout /></CaptainWrapper>} />
      </Routes>
    </div>
  )
}

export default App