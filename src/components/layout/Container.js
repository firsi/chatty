import React from 'react';
import { Sidebar } from './Sidebar';
import { Content } from './Content';
import { CreateRoomModal } from '../Room/CreateRoomModal'
import { Login } from '../Login';
import { useAuthValue } from '../../context/useAuth-context';
import { Header } from './Header';

export const Container = () => {
    const {auth} = useAuthValue();

    return(
        <>
            {!auth.id  ? <Login />
                    :<>
                    <Header />
                    <Sidebar />
                    <Content />
                    <CreateRoomModal />
                    </>
            }
        </>
    )
}