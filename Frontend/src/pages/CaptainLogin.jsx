import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData,setCaptainData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setCaptainData({email,password})
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
          <div className='h-20 mb-4'>
            <img className='w-20 ' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          </div>
          
          <form method="post" onSubmit={(e)=>handleSubmit(e)}>
            <h3 className='text-lg font-medium mb-2'>What's your email ?</h3>

            <input required value={email} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='example@gmail.com' />


            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            
            <input required value={password} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />


            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg ' >Login</button>
            <p className='text-center'>Join a fleet?<Link to={'/captain-signup'} className='text-blue-600 '> Register as Captain</Link></p>
          </form>
        </div>
        <div >
          <Link to={"/login"} className='bg-[#d5622d] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2  w-full text-lg '>Sign in as User</Link>
        </div>

      </div>

    </>
  )
}

export default CaptainLogin