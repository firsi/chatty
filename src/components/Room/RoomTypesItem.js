import React from 'react';

export const RoomTypesItem = ({action, actionParam:param, icon:Icon, text, showRooms=null}) => {

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
                    onClick={(event) => {
                        action && action(param);
                        setLinkActive(event.target.innerText);
                        showRooms && showRooms();
                    }}
                >
                    {text}
                </button>
        </>
    )
}