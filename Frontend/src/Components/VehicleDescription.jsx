import React from 'react'

const VehicleDescription = ({ vehicleDescriptionCloseRef, setVehicleDescription }) => {
    return (
        <div>
            <h5 ref={vehicleDescriptionCloseRef} onClick={() => setVehicleDescription(false)} className=' text-2xl absolute top-5 right-6'><i className="ri-arrow-down-wide-fill"></i></h5>
            <h4 className='text-2xl font-semibold mb-5 ml-2'>Popular Rides</h4>
            <div  className='mb-3 flex items-center gap-4 justify-between  p-3 rounded-xl border-2 bg-gray-200 hover:border-black'>
                <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i> 3 </span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 193.22 </h2>
            </div>
        </div>
    )
}

export default VehicleDescription