import React from 'react';


export const Room = ({name, createdByUser, createdAt, icon: Icon, action, actionParam: param}) => (
    
    <div className="single-room">  
        <div>
            <span className="room-name">{name}</span><br/>
            <span className="room-createdby">{createdByUser}</span>
        </div>
        <div className="room-additional-info">
            <span className="room-creation-date">
                {createdAt}
            </span>
            {Icon && <button onClick={() => action()}><Icon /></button>}
        </div>
    </div>
)