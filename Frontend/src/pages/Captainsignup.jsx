import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const Captainsignup = () => {
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState()
  const [vehicleType, setVehicleType] = useState('')

  const { captainData, setCaptainData } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const captainData = {
      email,
      fullname: { firstname, lastname },
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    // Clear all state variables
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        
        
      if (response.status !== 201) {
        throw new Error('Error registering captain');
      }
      if(response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        setCaptainData(data.captain);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Error registering captain:', error);
    }

  }

  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
          <div className='h-20 mb-4'>
            <img className='w-20' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          </div>

          <form method="post" onSubmit={(e) => handleSubmit(e)}>

            <h3 className='text-lg font-medium mb-2'>What's your name </h3>
            <div className='flex justify-between mb-5 gap-3'>
              <input required
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className='bg-[#eeeeee]  rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg' placeholder='Enter your Firstname' />

              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className='bg-[#eeeeee]  rounded px-2 py-2 border w-[100%] text-lg placeholder:text-lg' placeholder='Enter your Lastname' />

            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email </h3>

            <input required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-lg'
              type="email"
              placeholder='example@gmail.com' />


            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-lg'
              type="password"
              placeholder='Password' />

            <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
            <div>
              <div className='flex mb-3 justify-between  gap-3'>
                <input required
                  type="text"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  className='bg-[#eeeeee]  rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg'
                  placeholder='Vehicle Color' />

                <input required
                  type="text"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  className='bg-[#eeeeee]  rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg'
                  placeholder='Vehicle Plate' />

              </div>
              <div className='flex mb-3 justify-between  gap-3'>
                <input required
                  type="number"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  className='bg-[#eeeeee]  rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg'
                  placeholder='Vehicle Capacity' />

                <select required
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className='bg-[#eeeeee]  rounded px-2 py-2 border w-[95%] text-lg placeholder:text-lg'>
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>

              </div>
            </div>


            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg ' >Create Captain Account</button>
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