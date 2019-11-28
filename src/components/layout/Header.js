import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Profile } from '../Profile/Profile';

export const Header = () => {
    return(
        <header >
            <div className="logo-container">
                <button 
                    onClick={() => {
                        document.querySelector('.sidebar').classList.remove('close-sidebar');
                        document.querySelector('header').classList.remove('open-header');
                        document.querySelector('.sidebar').classList.add('open-sidebar');
                        document.querySelector('header').classList.add('close-header');
                        }}>
                    <FaBars /></button>
                <span className="logo">Chatty</span>
            </div>
            <Profile size="small" />
        </header>
    )
}