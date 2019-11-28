import React, { useState, useEffect } from 'react';
import { RoomList } from '../Room/RoomList';
import { SearchRooms } from '../Room/SearchRooms';
import { useRoomsValue } from '../../context/useRooms-context';
import { useAuthValue } from '../../context/useAuth-context';

export const RoomsBox = () => {
    const {rooms} = useRoomsValue();
    const [roomsCopy, setRoomsCopy] = useState([]);
    const {auth} = useAuthValue()
    
    const getFilteredRooms = (searchTerm) => {
        const copy = rooms.filter(room => room.name.toLocaleLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase()));
        setRoomsCopy(copy);  
    }

    useEffect(() => {
        setRoomsCopy(rooms);
    },[rooms]); 

    return(
        <div className="rooms-box">
            <SearchRooms rooms={rooms} action={getFilteredRooms} />
            <RoomList rooms={roomsCopy} currentUserId={auth.id} />
        </div>
    )
}