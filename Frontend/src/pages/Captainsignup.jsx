import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [captainData,setCaptainData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setCaptainData({email,fullname:{firstname,lastname},password})
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
  }

  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
          <div className='h-20 mb-4'>
            <img className='w-20' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          </div>
          
          <form method="post" onSubmit={(e)=>handleSubmit(e)}>

          <h3 className='text-lg font-medium mb-2'>What's your name </h3>
            <div className='flex justify-between mb-1 gap-3'>
              <input required 
              type="text" 
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)} 
              className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg' placeholder='Enter your Firstname' />

              <input 
              type="text" 
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)} 
              className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-[100%] text-lg placeholder:text-lg' placeholder='Enter your Lastname' />

            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email </h3>

            <input required 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg' 
            type="email"  
            placeholder='example@gmail.com' />


            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
             
            <input required 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg' 
            type="password"  
            placeholder='Password' />


            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg ' >Signup</button>
            <p className='text-center text-sm'>Already registered?<Link to={'/captain-login'} className='text-blue-600 '> Signin</Link></p>
          </form>
        </div>
        <div >
          {/* <Link to={"/captain-login"} className='bg-[#10b461] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2  w-full text-lg '>Sign in as Captain</Link> */}
          <p className='text-xs leading-tight'>By proceeeding, you consent to get calls, Whatsapp or SMS messages, including by automated mean, from Uber and its affiliated to the number provided.</p>
        </div>

      </div>
    </div>
  )
}

export default Captainsignup