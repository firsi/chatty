import React from 'react';
import moment from 'moment';
import { Room } from './Room';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';
import { FaTrash } from 'react-icons/fa';
import { useMessages } from '../../hooks/useMessages';


export const RoomList = ({rooms, currentUserId}) => {
    const {setSelectedRoom} = useSelectedRoomValue();
    const {deleteRoom} = useMessages();

    const deleteRoomfunc = (roomId, roomName) => {
      window.confirm(`Are you want to delete ${roomName} Room?`)
        && deleteRoom(roomId);
    }    
    
    return (
        <ul className='rooms'>
            {rooms.map(room => (
                <li key={room.id} 
                    onClick={() => {
                      setSelectedRoom(room);
                      document.querySelector('.rooms-box').classList.remove('show-rooms')
                    }}>
                  <Room
                    name={room.name}
                    createdByUser={room.createdByUserId}
                    createdAt={moment(room.createdAt).format('DD MMM')}
                    icon={room.createdByUserId === currentUserId ? FaTrash : null}
                    action={deleteRoomfunc}
                    actionParam={room.id}
                  />
                </li>
            ))}
        </ul>
    )
}