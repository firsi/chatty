import { useState, useEffect } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { instanceLocator, tokenUrl } from '../config';
import { useAuthValue } from '../context/useAuth-context';
import { useLoadingValue } from '../context/loading-context';

export const useUser = () => {
    const [username, setUsername] = useState('');
    const {setAuth} = useAuthValue();
    const {setLoading} = useLoadingValue();

    useEffect(() => {
        if(username !== ''){
            const chatManager = new ChatManager({
                instanceLocator,
                userId: username,
                tokenProvider: new TokenProvider({ url: tokenUrl })
            });
            let isSubscribe = true;

           chatManager.connect()
            .then((user) => {
                if(isSubscribe){
                    setAuth(user);
                    localStorage.setItem('user',user.id);
                    setLoading(false);
                }

            })
            .catch(err => {
                isSubscribe && console.error('Error on connection', err)
            })

            return () => (isSubscribe = false);
        }
        
    }, [username, setUsername, setAuth, setLoading])

    return {setUsername }
}