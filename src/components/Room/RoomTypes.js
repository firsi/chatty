import React from 'react';
import PropTypes from 'prop-types';
import { RoomTypesItem } from './RoomTypesItem';


export const RoomTypes = ({links}) => {

    return (
        <ul className="rooms-actions">
            {links && links.map((item, index) => (
            <li key={`room-types${index}`}>
                <RoomTypesItem 
                    action={item.action} 
                    actionParam={item.actionParam} 
                    icon={item.icon}
                    text={item.text}
                    showRooms={item.showRooms && item.showRooms}
                />
            </li>))}
        </ul>
    )
}

RoomTypes.propTypes = {
    links: PropTypes.array.isRequired
}