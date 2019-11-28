import React, { useEffect } from 'react';
import { useMessages } from '../../hooks/useMessages';
import { useLoadingValue } from '../../context/loading-context';
import { useAuthValue } from '../../context/useAuth-context';
import { formatDate } from '../../helpers/index';
import { Message } from './Message';
import { Loader } from '../Loader/Loader';

export const MessageList = () => {
    const {auth} = useAuthValue();
    const {loading} = useLoadingValue();
    const {messages} = useMessages();

    useEffect(() => {
       const node =  document.querySelector('.message-list-container');
       node.scrollTop = node.scrollHeight;
    })
    
    return (
        <div className="message-list-container">
            {    
                 loading ? <div className="loader-container"><Loader /></div>  
                 
                 : messages.map((message, index) => (
                        <Message 
                            key={`messages${index}`} 
                            username={message.senderId}
                            message={message.text}
                            createdAt={formatDate(message.createdAt)} 
                            reverse={auth.id === message.senderId}
                        />
                    ))   
            } 
        </div>
    )
}