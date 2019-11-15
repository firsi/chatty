import React, { useState } from 'react';

export const SendMessage = ({showSearchField=false, icon: Icon , onSubmit:action}) => {
    const [message, setMessage] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        action(message);
        setMessage('');
    }

    const autoGrow = ({target: element}) => {
        element.style.height = element.scrollHeight+'px';
        console.log(element.scrollHeight);
    }
    return (
        showSearchField && 
            <form onSubmit={handleSubmit} >
                <textarea 
                    className="send-message-field"
                    type='text' 
                    value={message}
                    onInput={(event) => autoGrow(event)}
                    onChange={event => setMessage(event.target.value)}
                    placeholder='Type a message...' 
                />
                <button type='submit'>
                    <Icon />
                </button>
            </form>
    )
}