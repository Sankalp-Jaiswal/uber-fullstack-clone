import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="h-screen pt-8  w-full flex flex-col justify-between bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1601522956505-031a079ca2fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)]">
        <img className='w-16 ml-9' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <div className='bg-white py-5 px-8'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to={'/login'} className='w-full flex items-center justify-center bg-black text-white py-3 rounded-md mt-6'>Continue</Link>
        </div>
    </div>
    </>
  )
}

export default Home