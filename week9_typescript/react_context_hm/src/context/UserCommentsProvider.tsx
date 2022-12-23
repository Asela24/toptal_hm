/* eslint-disable @typescript-eslint/no-use-before-define */
import { createContext, useReducer, useContext } from "react";
import { Action, reducer, initialState, defaultDispatch, AppState} from '../reducer'
export interface userComments {
    state:  AppState,
    dispatch:  React.Dispatch<Action>,
}

export const UserContext = createContext<userComments>({
    state: initialState,
    dispatch: defaultDispatch
})


export const UserCommentsProvider = ({children}: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer<React.Reducer<AppState, Action>>(reducer, initialState)

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserComments = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error ('no comments')
    }

    return context
}





