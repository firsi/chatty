import React from 'react';
import './App.scss';
import { Sidebar } from './components/layout/Sidebar';
import { Content } from './components/layout/Content';
import { SelectedRoomProvider } from './context/useSelectedRoom-context';
import { RoomsProvider } from './context/useRooms-context';
import { CreateRoomModal } from './components/Room/CreateRoomModal'

function App() {
  return (
    <div className="App">
      <RoomsProvider>
        <SelectedRoomProvider>
          <Sidebar />
          <Content />
          <CreateRoomModal />
        </SelectedRoomProvider>
      </RoomsProvider>
    </div>
  );
}

export default App;
