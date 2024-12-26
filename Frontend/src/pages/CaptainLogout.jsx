import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token);


    useEffect(() => {
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(response.status);
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Error during logout:', error);
            }
        };

        if (token) {
            logout();
        } else {
            navigate('/login');
        }
    }, [token, navigate]);
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout