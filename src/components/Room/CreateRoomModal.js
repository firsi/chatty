import React,{ useState } from 'react';
import { Modal } from '../Modal';

export const CreateRoomModal = ({showModal, setShowModal, createRoom, error, setError}) => {
    const [value, setValue] = useState('');
    
    return (
        <Modal showModal={showModal} setShowModal={setShowModal} title={'Create Room '}>
            <div className="create-room-modal"> 
                <input 
                    type="text"
                    className="create-room-input"
                    placeholder="Type the name of the room"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />   
                {error && <span className="error">{error}</span>} 
                <div>
                    <button 
                        className="create-room-btn"
                        onClick={() => {
                            createRoom(value)
                            .then(() => {
                                !error && setShowModal(false);
                                setError(null)
                            });
                        }} 
                    >
                        Create room
                    </button>
                    <button 
                        className="cancel-room-creation-btn"
                        onClick={(event) => setShowModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
          </Modal>
    )
}