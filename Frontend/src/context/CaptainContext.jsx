import React, { createContext, useState, useContext } from 'react';

// Create the context
export const CaptainDataContext = createContext();

// Create a provider component
export const CaptainContext = ({ children }) => {
    const [captainData, setCaptainData] = useState({
        fullname: {
            firstname: "",
            lastname: ""
        },
        email: "",
        password: "",
        status: "",
        vehicle: {
            color: "",
            plate: "",
            capacity: 1,
            vehicleType: ""
        }
    });

    return (
        <CaptainDataContext.Provider value={{ captainData, setCaptainData }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

