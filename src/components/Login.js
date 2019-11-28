import React, { useState } from 'react';
import { Modal } from './Modal';
import { FaHeart } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';
import { Loader } from './Loader/Loader';

export const Login = () => {
    const [value, setValue] = useState('');
    const [showError, setShowError] = useState(false);
    const {setUsername} = useUser();
    const [loading, setLoading] = useState(false);
    
    const logUser = () => {
        if(value === 'johnDoe' || value === 'janetDoe' || value ==='Karl'){
            setLoading(true);
            setUsername(value);
        }
        else{
            setShowError(true);
            document.querySelector('.login input').setAttribute('aria-invalid', 'true');
        }
    }
    

    return(
        <Modal  showModal title='Login/Signup' cancelOnClickOverlay={false}>
           <div className="create-room-modal login" aria-live="assertive"> 
                <span id="hint" className="hint">
                    Please login using: 
                    <em>'johnDoe'</em>, <em>'Karl'</em> or <em>'janetDoe'</em>
                </span>
                <input 
                    type="text"
                    aria-describedby="hint"
                    className="create-room-input"
                    placeholder="Enter your username"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    onKeyDown={(event) => event.keyCode === 13 && logUser() }
                    autoFocus
                    autoComplete="on"
                />   
                {showError && 
                    <span className="error">To login, choose between: 'johnDoe', 'Karl', or 'janetDoe'</span>} 
                <div>
                    <button 
                        className="create-room-btn"
                        onClick={() => logUser()} 
                        disabled={loading}
                    >
                        {loading ? <Loader />  : <><span>Enter Chatty</span> <FaHeart /></>}
                    </button>
                </div>
            </div>
        </Modal>
    )
}