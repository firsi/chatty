import React from 'react';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';
import { useMessages } from '../../hooks/useMessages';
import { MessageList } from '../Message/MessageList';
import { SendMessage } from '../Message/SendMessage';
import { FaPaperPlane } from 'react-icons/fa';

export const MessagesBox = () => {
    const {selectedRoom} = useSelectedRoomValue();
    const {sendMessage} = useMessages(selectedRoom);

    return(
        <div className="messages-box">
            {selectedRoom &&
                <div className="messages-header">
                    <h2>{selectedRoom.name}</h2>
                    <span className="room-createdby">
                        created by: {selectedRoom.createdByUserId}
                    </span>
                </div>
            }
            <MessageList />
            <SendMessage 
                onSubmit={sendMessage} 
                showSearchField={selectedRoom ? true : false} 
                icon={FaPaperPlane}/>
        </div>
    )
}