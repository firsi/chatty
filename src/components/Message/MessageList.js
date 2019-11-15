import React, { useState, useEffect } from 'react';
import { useMessages } from '../../hooks/useMessages';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';
import { Message } from './Message';
import { formatDate } from '../../helpers/index';
import { Loader } from '../Loader';

export const MessageList = () => {
    const {selectedRoom} = useSelectedRoomValue();
    const {messages, user} = useMessages(selectedRoom);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (!messages[0] && selectedRoom){
            setLoading(true);
        }
        else {
            setLoading(false);
        }
    },[messages, selectedRoom])

    return (
        <div className="message-list-container">
            {
                 !loading  ? messages.map((message, index) => (
                    <Message 
                        key={`messages${index}`} 
                        username={message.senderId}
                        message={message.text}
                        createdAt={formatDate(message.createdAt)} 
                        reverse={user.id === message.senderId}
                     />   
                ))
                : <div className="loader-container"><Loader /></div>
            } 
        </div>
    )
}