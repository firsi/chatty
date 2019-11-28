import React from 'react';
import moment from 'moment';
import { Room } from './Room';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';

export const RoomList = ({rooms}) => {
    const {setSelectedRoom} = useSelectedRoomValue();
    
    return (
        <ul className='rooms'>
            {rooms.map(room => (
                <li key={room.id} 
                    onClick={() => {
                      const messagesBox = document.querySelector('.messages-box');
                      const welcomeBox = document.querySelector('.welcome');
                      
                      document.querySelector('.rooms-box').classList.remove('show-rooms');
                      messagesBox ? 
                        messagesBox.classList.remove('hide-box') : welcomeBox.classList.remove('hide-box');
                      setSelectedRoom(room);
                    }}>
                  <Room
                    name={room.name}
                    createdByUser={room.createdByUserId}
                    createdAt={moment(room.createdAt).format('DD MMM')}
                    count={room.unreadCount}
                  />
                </li>
            ))}
        </ul>
    )
}