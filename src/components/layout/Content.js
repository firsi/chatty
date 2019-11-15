import React from 'react';
import { MessagesBox } from './MessagesBox';
import { RoomsBox } from './RoomsBox';


export const Content = () => {
    return(<main >
        <h1 className="content-title">Chat</h1>
        <div className="content">
            <RoomsBox />
            <MessagesBox />
        </div>
    </main>)
}