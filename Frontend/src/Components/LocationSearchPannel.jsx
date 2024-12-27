import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPannel = ({setPanelOpen, setvehiclePanel}) => {

    const location = [
        "24B, Near Dewa majar, Dewa Shareef, Barabanki, Uttar Pradesh",
        "22B, Near cafe, Dewa Shareef, Barabanki, Uttar Pradesh",
        "15A, Near park, Dewa Shareef, Barabanki, Uttar Pradesh",
        "10C, Near school, Dewa Shareef, Barabanki, Uttar Pradesh",
        "5D, Near hospital, Dewa Shareef, Barabanki, Uttar Pradesh",
        "8E, Near market, Dewa Shareef, Barabanki, Uttar Pradesh",
        "3F, Near temple, Dewa Shareef, Barabanki, Uttar Pradesh"

    ]




    return (
        <div>

            {location.map(function (elem,id) {
                return (
                    <div key={id} onClick={()=>{
                        setvehiclePanel(true)
                        setPanelOpen(false)
                    }} className='flex justify-between items-center gap-5 mb-2 border-2 border-white rounded-xl hover:border-gray-200 p-2'>
                        <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill' ></i></h2>
                        <h4 className='text-base font-medium w-[85%]'>{elem}</h4>
                    </div>
                )
            })}



            

        </div>
    )
}

export default LocationSearchPannel