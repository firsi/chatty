import React from 'react';
import { useSelectedRoomValue } from '../../context/useSelectedRoom-context';
import { MessagesBox } from './MessagesBox';
import { RoomsBox } from './RoomsBox';
import { FaBlog, FaArrowLeft } from 'react-icons/fa';


export const Content = () => {
    const {selectedRoom} = useSelectedRoomValue()
    return(<main >
        <h1 className="content-title">Chat</h1>
        <div className="content">
            <RoomsBox />
            {!selectedRoom ? 
                <div className="welcome">
                    <h2>Welcome to Chatty</h2>
                    <FaArrowLeft className="left-arrow" /> 
                    <span className="directions">Select a room to start chatting instantly</span>
                    <br />
                    <span className="mobile-directions">
                        Go to the Menu at the top left, select a room and start chatting instantly !
                    </span>
                    <FaBlog className="blog"/>
                </div>
                : <MessagesBox selectedRoom={selectedRoom} />
            }
        </div>
    </main>)
}