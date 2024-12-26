import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Userlogout = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token);


    useEffect(() => {
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(response.status);
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
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
        <div>
            <p>Logging out...</p>
        </div>
    )
}

export default Userlogout