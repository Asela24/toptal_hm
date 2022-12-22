import React, { createContext, useContext, useState } from "react"
import { UserNameType } from "../../types/userTypes"

export interface UserNameContext {
    currentUser: UserNameType | null,
    setCurrentUser:  React.Dispatch<React.SetStateAction<UserNameType>> | null
}

export const SelectedUserContext = createContext<UserNameContext>({
    currentUser: 'Adeline',
    setCurrentUser: null
})

export const SelectUserProvider = ({children}: {children: React.ReactNode}) => {

    const [currentUser, setCurrentUser] = useState<UserNameType>('Adeline')

    const value = {currentUser, setCurrentUser}

    return (
        <SelectedUserContext.Provider value={value}>
            {children}
        </SelectedUserContext.Provider>
    )
}

export const useSelectedUser = () => {
    const context = useContext(SelectedUserContext);

 /*    if (context === null) {
        throw new Error('User is not selected')
    } */

    return context
}



