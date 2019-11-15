import React, {useState, useContext, createContext } from 'react';

export const selectedRoomContext = createContext();

export const SelectedRoomProvider = ({children}) => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <selectedRoomContext.Provider value={{selectedRoom, setSelectedRoom}}>
            {children}
        </selectedRoomContext.Provider>
    )
}

export const useSelectedRoomValue = () => useContext(selectedRoomContext);
