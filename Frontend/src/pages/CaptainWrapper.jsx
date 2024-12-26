import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const { setCaptainData } = useContext(CaptainDataContext)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, 
        {
        headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
        if (response.status === 200) {
            setCaptainData(response.data.captain)
            setIsLoading(false)
        }
    }).catch((error) => {    
        console.error('Error getting captain profile:', error)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <>
            {children}
        </>
    )
}

export default CaptainWrapper