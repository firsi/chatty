import React from 'react';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';
import { useRooms } from '../../hooks/useRooms';
import { MessageList } from '../Message/MessageList';
import { SendMessage } from '../Message/SendMessage';
import { FaPaperPlane } from 'react-icons/fa';


// we get the selected room from the props (cf. check <Content />)
export const MessagesBox = ({ selectedRoom }) => {
    // 1. here you use hooks to retrieve data from the selected room all across your application
    // As a rule of thumb, whenever it's possible, try to pass data from props instead
    // For example, the component <Content /> already retrieve the selected room
    // and will be to easily pass data.
    // The reasoning is that if for any reason later on you would like to use this component for an other room
    // which is not the selected one in your app, you would be able to do so.
    // const {selectedRoom} = useSelectedRoomValue();
    // cf. comment above with props
    const {sendMessage} = useRooms();

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