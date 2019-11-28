import React from 'react';
import { Unread } from '../unread/Unread';


export const Room = ({name, createdByUser, createdAt, count}) => (
    
    <div className="single-room">  
        <div>
            <span className="room-name">{name}</span><br/>
            <span className="room-createdby">{createdByUser}</span>
        </div>
        <div className="room-additional-info">
            <span className="room-creation-date">
                {createdAt}
            </span>
            {count>0 && <Unread count={count} />}
        </div>
    </div>
)