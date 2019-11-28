import { useState, useEffect } from 'react';
import { useAuthValue } from '../context/useAuth-context';
import { useSelectedRoomValue } from '../context/useSelectedRoom-context';

export const useRooms = () => {
    const {selectedRoom, setSelectedRoom} = useSelectedRoomValue();
    const {auth} = useAuthValue();
    const [joinableRooms, setJoinableRooms] = useState([]);
    const [joinedRooms, setJoinedRooms] = useState([]);
    const [error, setError] = useState();


    const getRooms = (currentUser) => {
        currentUser.getJoinableRooms()
        .then(joinableRooms => {
            setJoinableRooms(joinableRooms);
            setJoinedRooms(currentUser.rooms)
        })
        .catch(error => console.error('error on joinable rooms: ', error));
      }

    const createRoom = (name) => {
        return auth.createRoom({
            name: name,
          }).then(room => {
            setSelectedRoom(room);
            getRooms(auth);
          })
          .catch(err => {
            console.log(`Error creating room ${err}`);
            setError('Error when creating the room, check your connection and try again');
          })
      }

      const sendMessage = (text) => {
        auth.sendMessage({
            roomId: selectedRoom.id,
            text
        })
    }

      useEffect(() => {
          getRooms(auth);
      },[auth])

      return {joinableRooms, joinedRooms, getRooms, createRoom, error, setError,sendMessage}

}