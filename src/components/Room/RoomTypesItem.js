import React from 'react';
import { closeSidebarAnimation } from '../../helpers';

export const RoomTypesItem = ({action, actionParam:param, icon:Icon, text, showRooms=null, hasPopup=false}) => {

    const setLinkActive = (linkText) => {
        const links = document.querySelectorAll('.rooms-actions li');

        links.forEach(link => 
            link.innerText === linkText ?
                link.classList.add('active') : link.classList.remove('active')
        )
    }

    return (
        <>
            <Icon />
                <button 
                    type="button"
                    aria-haspopup={hasPopup}
                    onClick={(event) => {
                        action && action(param);
                        setLinkActive(event.target.innerText);
                        showRooms && showRooms();
                        closeSidebarAnimation();
                    }}
                >
                    {text}
                </button>
        </>
    )
}