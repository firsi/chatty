import React from 'react';
import avatarUrl from '../../assets/default-avatar.png';
import './profile.scss';

export const Profile = ({showUsername, username, size="medium"}) => {
    
    return (
        <div className="profile">
            <div className={`profile-picture ${size}`}>
                <img src={avatarUrl} alt="user Profile"/>
            </div>
            {showUsername &&
                <span className="username">{username}</span>
            }
        </div>
    )
}