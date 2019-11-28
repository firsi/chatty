import { useState, useEffect } from 'react';
import { useAuthValue } from '../context/useAuth-context';
import { useSelectedRoomValue } from '../context/useSelectedRoom-context';
import { useLoadingValue } from '../context/loading-context';


export const useMessages = () => {
    const {selectedRoom} = useSelectedRoomValue();
    const {auth} = useAuthValue();
    const {setLoading} = useLoadingValue();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const subscribeToRoom = () => {
            console.log(selectedRoom);
            setMessages([]); 
            return auth.subscribeToRoom({
                roomId: selectedRoom.id,
                hooks: {
                    onMessage: message => {      
                        setMessages(prevState => [...prevState, message]);
                        setLoading(false);
                    }
                },
            });
            
            };

            if(selectedRoom){
                subscribeToRoom()
                .catch(error => console.log(error));
            }
    },[selectedRoom, auth, setLoading])
     
    return {messages, setMessages};
}
