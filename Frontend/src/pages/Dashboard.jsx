import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../Components/LocationSearchPannel';
import VehiclePanel from '../Components/VehiclePanel';
import VehicleDescription from '../Components/VehicleDescription';

const Dashboard = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const vehicleCloseRef = useRef(null);
  const [vehicleDescription, setVehicleDescription] = useState(false);
  const vehicleDescriptionRef = useRef(null);
  const vehicleDescriptionCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        duration: 0.5
      })
      gsap.to(panelCloseRef.current, {
        // rotate: 0,
        // duration: 0.5
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        opacity: 0.7,
        duration: 0.5
      })
      gsap.to(panelCloseRef.current, {
        // rotate: 180,
        // duration: 0.5
        opacity: 0,
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)',
        duration: 0.5
      })
      gsap.to(vehicleCloseRef.current, {
        opacity: 1,
        duration: 0.5
      })

    } else {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)',
        duration: 0.5
      })
      gsap.to(vehicleCloseRef.current, {
        opacity: 0,
        duration: 0.5
      })
    }
  },[vehiclePanel])

  useGSAP(function () {
    if (vehicleDescription) {
      gsap.to(vehicleDescriptionRef.current, {
        transform:'translateY(0)',
        duration: 0.5
      })
      gsap.to(vehicleDescriptionCloseRef.current, {
        opacity: 1,
        duration: 0.5
      })

    } else {
      gsap.to(vehicleDescriptionRef.current, {
        transform:'translateY(100%)',
        duration: 0.5
      })
      gsap.to(vehicleDescriptionCloseRef.current, {
        opacity: 0,
        duration: 0.5
      })
    }
  },[vehicleDescription])


  return (
    <div className='h-screen relative overflow-hidden'>

      <img className='w-24 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

      <div className='h-screen w-full flex justify-center items-center'>
        {/* temp img   */}
        <img className='h-full w-full object-cover' src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" />
      </div>

      <div className=' h-screen absolute top-0 w-full flex flex-col justify-end items-center'>

        <div className='h-[30%] bg-white p-6 rounded-lg relative w-full'>
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='absolute top-5 right-5 text-2xl'><i className="ri-arrow-down-wide-fill"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className='line absolute h-12 w-1 top-[43%] left-10 bg-gray-800 rounded-full'></div>
            <input onClick={() => setPanelOpen(true)} onChange={(e) => setPickup(e.target.value)} value={pickup} className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup location' />
            <input onClick={() => setPanelOpen(true)} onChange={(e) => setDestination(e.target.value)} value={destination} className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
            <button>Search</button>
          </form>
        </div>

        <div ref={panelRef} className=' bg-white  w-full px-6'>
          <LocationSearchPannel setPanelOpen={setPanelOpen} setvehiclePanel={setvehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full'>
         <VehiclePanel vehicleCloseRef={vehicleCloseRef} setVehicleDescription={setVehicleDescription} setvehiclePanel={setvehiclePanel}/>
      </div>

      <div ref={vehicleDescriptionRef} className='fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full'>
         <VehicleDescription vehicleDescriptionCloseRef={vehicleDescriptionCloseRef} setVehicleDescription={setVehicleDescription}/>
      </div>


      {/* <Link to='/user/logout'>Logout</Link> */}
    </div>
  )
}

export default Dashboard