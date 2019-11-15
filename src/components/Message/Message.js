import React from 'react';
import { Profile } from '../Profile/Profile';

export const Message = ({username, message, createdAt, reverse}) => {
    return (
        <div className={reverse ? 
                            "message-container right" : "message-container"}>

            <div className="message-sender">
                <Profile showUsername={false} size="small"/>
                <span className="message-date">{createdAt}</span>
            </div>
            <div className="message">
                <p className={reverse ? "sender-id text-right" : "sender-id"}>
                    {username}
                </p>

                <p className={reverse ? "message-content blue" : "message-content grey"}>
                    {message}
                </p>
            </div>
        </div>
    )
}