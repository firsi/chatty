import React, {useState} from 'react';
import { RoomTypes } from '../Room/RoomTypes';
import { Profile } from '../Profile/Profile';
import { useMessages } from '../../hooks/useMessages';
import { useRoomsValue } from '../../context/useRooms-context';
import { FaRegComments, FaSignInAlt, FaRegPlusSquare } from 'react-icons/fa';
import { CreateRoomModal } from '../Room/CreateRoomModal';


export const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const {user, joinableRooms, joinedRooms, createRoom, error, setError} = useMessages();
    const {setRooms} = useRoomsValue();
    
    const showRooms = () => {
        document.querySelector('.rooms-box').classList.add('show-rooms');
    }
    
    const data = [
        {action: setRooms, actionParam: joinedRooms, icon: FaRegComments, text: 'My Rooms', showRooms: showRooms},
        {action: setRooms, actionParam: joinableRooms,icon: FaSignInAlt, text: 'Available Rooms', showRooms: showRooms},
        {action: setShowModal, actionParam: true, icon: FaRegPlusSquare, text: 'Create Room', showRooms: null},
    ]
    

    return(<div className="sidebar">
        <CreateRoomModal 
            showModal={showModal} 
            setShowModal={setShowModal}
            createRoom={createRoom}
            setError={setError}
            error={error}
        />
        <Profile 
            username={user.id} 
            showUsername={true} 
        />
        <RoomTypes links={data} />
    </div>)
}