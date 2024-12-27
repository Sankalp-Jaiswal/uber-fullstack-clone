import React from 'react'

const VehiclePanel = ({vehicleCloseRef,setvehiclePanel,setVehicleDescription}) => {
  return (
    <div>
        <h5 ref={vehicleCloseRef} onClick={()=>setvehiclePanel(false)}  className=' text-2xl absolute top-5 right-6'><i className="ri-arrow-down-wide-fill"></i></h5>
        <h4 className='text-2xl font-semibold mb-5 ml-2'>Popular Rides</h4>
        <div onClick={()=>{setVehicleDescription(true),setvehiclePanel(false)}} className='mb-3 flex items-center gap-4 justify-between  p-3 rounded-xl border-2 bg-gray-200 hover:border-black'> 
          <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i> 3 </span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ 193.22 </h2>
        </div>

        <div onClick={()=>{setVehicleDescription(true),setvehiclePanel(false)}} className='mb-3 flex items-center gap-4 justify-between  p-3 rounded-xl border-2 bg-gray-200 hover:border-black'> 
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i> 1 </span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motor cycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ 52.52 </h2>
        </div>

        <div onClick={()=>{setVehicleDescription(true),setvehiclePanel(false)}} className='mb-3 flex items-center gap-4 justify-between  p-3 rounded-xl border-2 bg-gray-200 hover:border-black'> 
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'></i> 2 </span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ 40.52 </h2>
        </div>
    </div>
  )
}

export default VehiclePanel