export const reducer = (state: AppState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD':
           return {
            ...state,
            comments: [...state.comments, payload]
        }

        case 'INCREMENT': 
            const updatedComments = state.comments.map(comment => comment.id === payload ? {...comment, count: comment.count + 1} : {...comment} )
            return {
                ...state,
                comments: updatedComments
            }
        
        case 'DECREMENT': 
            const modifiedComments = state.comments.map(comment => comment.id === payload ? {...comment, count: comment.count - 1} : {...comment} )
            return {
                ...state,
                comments: modifiedComments
            }
    
        case 'DELETE': 
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== payload)
            }

        case 'EDIT': 
            const comments = state.comments.map(comment => comment.id === payload ? {...comment, inputDisabled: !comment.inputDisabled} : {...comment} )
            return {
                ...state,
                comments: comments
            }

        case 'CHANGE_TEXT': {
            const comments = state.comments.map(comment => comment.id === payload.id ? {...comment, text: comment.text} : {...comment})
            console.log(payload.text)
            return {
                ...state,
                comments: comments
            }
        }    

        default:
             throw new Error('no comments')
    }
}


export type Action = 
    | { type: 'INCREMENT', payload: number }
    | { type: 'DECREMENT', payload: number }
    | { type: 'ADD', payload: CommentInterface }
    | { type: 'DELETE', payload: number } 
    | { type: 'EDIT', payload: number }
    | { type: 'CHANGE_TEXT', payload: {id: number, text: string} }

    
export type CommentInterface = {
    id: number,
    name: string,
    avatar: string,
    text: string,
    count: number,
    inputDisabled: boolean,
}

export type AppState = {
    comments: CommentInterface[]
}

export const defaultDispatch: React.Dispatch<Action> = () => initialState


export const initialState = { 
    comments: [
        {
        id: 1,
        name: 'Max',
        avatar: '/avatarMan.png',
        text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        count: 10,
        inputDisabled: true,
    },
    {
        id: 2,
        name: 'Mary',
        avatar: '/avatar.png',
        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, on the Internet tend to repeat predefined chunks as necessary',
        count: 5,
        inputDisabled: true,
    }
    ]
}


