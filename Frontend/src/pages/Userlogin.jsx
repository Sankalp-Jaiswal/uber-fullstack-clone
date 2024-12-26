import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const Userlogin = () => {

  const navigate = useNavigate()
  const {user, setUser}  = useContext(UserDataContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [userData,setuserData] = useState({})

  const handleSubmit = async(e) => {
    e.preventDefault()
    const userData = {email,password}
    setEmail('')
    setPassword('')
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if(response.status === 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
          <div className='h-20 '>
            <img className='w-24' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
          </div>
          
          <form method="post" onSubmit={(e)=>handleSubmit(e)}>
            <h3 className='text-lg font-medium mb-2'>What's your email ?</h3>

            <input required value={email} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='example@gmail.com' />


            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            
            <input required value={password} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg' type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />


            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg ' >Login</button>
            <p className='text-center text-sm'>New to Uber?<Link to={'/signup'} className='text-blue-600 '> Signup</Link></p>
          </form>
        </div>
        <div >
          <Link to={"/captain-login"} className='bg-[#10b461] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2  w-full text-lg '>Sign in as Captain</Link>
        </div>

      </div>

    </>
  )
}

export default Userlogin