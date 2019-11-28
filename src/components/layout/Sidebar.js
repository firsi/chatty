import React, {useState} from 'react';
import { RoomTypes } from '../Room/RoomTypes';
import { Profile } from '../Profile/Profile';
import { useRoomsValue } from '../../context/useRooms-context';
import { FaRegComments, FaSignInAlt, FaRegPlusSquare, FaWindowClose } from 'react-icons/fa';
import { CreateRoomModal } from '../Room/CreateRoomModal';
import { useAuthValue } from '../../context/useAuth-context';
import { useRooms } from '../../hooks/useRooms';
import { closeSidebarAnimation } from '../../helpers/index';


export const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const {joinableRooms, joinedRooms, createRoom, error, setError} = useRooms();
    const {auth} = useAuthValue();
    const {setRooms} = useRoomsValue();
    

    const showRooms = () => {
        const messagesBox = document.querySelector('.messages-box');
        const welcomeBox = document.querySelector('.welcome');
        const roomsBox = document.querySelector('.rooms-box')

        roomsBox.classList.add('show-rooms');
        messagesBox ? messagesBox.classList.add('hide-box') : welcomeBox.classList.add('hide-box');
    }
    
    const data = [
        {action: setRooms, actionParam: joinedRooms, icon: FaRegComments, text: 'My Rooms', showRooms: showRooms, hasPopup: false},
        {action: setRooms, actionParam: joinableRooms,icon: FaSignInAlt, text: 'Available Rooms', showRooms: showRooms, hasPopup: false},
        {action: setShowModal, actionParam: true, icon: FaRegPlusSquare, text: 'Create Room', showRooms: null, hasPopup: true},
    ]
    

    return(<div className="sidebar">
        <CreateRoomModal 
            showModal={showModal} 
            setShowModal={setShowModal}
            createRoom={createRoom}
            setError={setError}
            error={error}
        />
        <div className="close-container">
            <button 
                className="close-btn"
                onClick={() => {
                    closeSidebarAnimation();
                }}
                aria-label="close sidebar"
            >
                <FaWindowClose  />
            </button>
        </div>
        <Profile 
            username={auth.id} 
            showUsername={true} 
        />
        <RoomTypes links={data} />
    </div>)
}