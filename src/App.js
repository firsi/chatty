import React from 'react';
import './App.scss';
import { SelectedRoomProvider } from './context/useSelectedRoom-context';
import { RoomsProvider } from './context/useRooms-context';
import { AuthProvider } from './context/useAuth-context';
import { Container } from './components/layout/Container';
import { LoadingProvider } from './context/loading-context';


function App() {
  return (
    <div className="App">
      <AuthProvider >
        <RoomsProvider>
          <SelectedRoomProvider>
            <LoadingProvider>
              <Container />
            </LoadingProvider>
          </SelectedRoomProvider>
        </RoomsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
