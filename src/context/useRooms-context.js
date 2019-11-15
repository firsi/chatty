import React, {useContext, createContext, useState } from 'react';

export const useRoomsContext = createContext();

export const RoomsProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);

    return(
        <useRoomsContext.Provider value={{rooms, setRooms}}>
            {children}
        </useRoomsContext.Provider>
    )
}

export const useRoomsValue = () => useContext(useRoomsContext);