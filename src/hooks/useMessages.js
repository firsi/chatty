import { useState, useEffect } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { instanceLocator, tokenUrl } from '../config';

export const useMessages = (room = null) => {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({});
    const [joinableRooms, setJoinableRooms] = useState([]);
    const [joinedRooms, setJoinedRooms] = useState([]);
    const [error, setError] = useState();

    const sendMessage = (text) => {
        user.sendMessage({
            roomId: room.id,
            text
        })
    }

    const getRooms = (currentUser) => {
        currentUser.getJoinableRooms()
        .then(joinableRooms => {
            setJoinableRooms(joinableRooms);
            setJoinedRooms(currentUser.rooms)
        })
        .catch(error => console.error('error on joinable rooms: ', error));
      }

    const createRoom = (name) => {
        return user.createRoom({
            name: name,
          }).then(roomFromServer => {
            room=roomFromServer;
            getRooms(user);
          })
          .catch(err => {
            console.log(`Error creating room ${err}`);
            setError('Error when creating the room, check your connection and try again');
          })
      }

      const deleteRoom = (roomId) => {
        return user.deleteRoom({ roomId })
        .then(() => {
          getRooms(user);
        })
        .catch(err => {
          console.log(`Error deleted room ${roomId}: ${err}`)
        })
      }
 
    useEffect(() => {
          
          const chatManager = new ChatManager({
            instanceLocator,
            userId: 'johnDoe',
            tokenProvider: new TokenProvider({ url: tokenUrl })
          });

          const subscribeToRoom = (currentUser) => {
            setMessages([]); 
           return currentUser.subscribeToRoom({
               roomId: room.id,
               hooks: {
                   onMessage: message => {
                       
                       setMessages((previous) => [...previous,message]);
                   }
               },
           })
         };    

        chatManager.connect()
        .then(currentUser => {
            setUser(currentUser);
            if(room){ 
                subscribeToRoom(currentUser)
                .then(() => {
                    getRooms(currentUser);
                }); 
            }
            getRooms(currentUser);   
        })
        .catch(err => {
            console.error('Error on connection', err)
        })
    }, [setUser, setJoinableRooms, setJoinedRooms, room])

    return {messages, 
            setMessages, 
            sendMessage, 
            error, 
            setError, 
            deleteRoom, 
            joinableRooms, 
            joinedRooms, 
            user, 
            createRoom
        };
}
