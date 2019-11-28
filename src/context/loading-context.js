import React, { createContext, useContext, useState } from 'react';

export const useLoadingContext = createContext();

export const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    return (
        <useLoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </useLoadingContext.Provider>
    )
}

export const useLoadingValue = () => useContext(useLoadingContext); 