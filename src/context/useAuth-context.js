import React, { useContext, createContext, useState } from 'react';

export const useAuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return (
        <useAuthContext.Provider value={{auth, setAuth}}>
            {children}
        </useAuthContext.Provider>
    )
}

export const useAuthValue = () => useContext(useAuthContext);