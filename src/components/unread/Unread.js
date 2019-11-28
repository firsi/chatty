import React from 'react';
import './unread.scss';
export const Unread = ({count}) => {
    return (
        <div className="unread">
            <span>{count}</span>
        </div>
    )
}