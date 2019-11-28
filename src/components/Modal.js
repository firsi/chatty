import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

export const Modal = ({children, title, showModal=false, setShowModal, cancelOnClickOverlay=true}) => {
    return (
        <>
           {showModal &&
           <>
                <div 
                    className="overlay" 
                    onClick={() => cancelOnClickOverlay && setShowModal(false)}
                >
                </div>
                <div className="modal">
                    
                    <h1 className="modal-title">{title}</h1>
                    {children}
                </div>
            </>
        }
        </>
    )
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func
}

