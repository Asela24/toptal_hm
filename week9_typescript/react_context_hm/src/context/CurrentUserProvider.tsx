import { createContext, useContext } from 'react';
import React from 'react';

type Users = 'Mary' | 'Max'

const CurrentUserContext = createContext<Users>('Max')

export const CurrentUserProvider = ({children}: {children: React.ReactNode}) => {

    return (
        <CurrentUserContext.Provider value='Max'>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => {
    const context = useContext(CurrentUserContext);

    return context;
}
