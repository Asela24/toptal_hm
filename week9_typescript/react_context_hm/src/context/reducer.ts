

export const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case 'ADD':
            console.log(action.payload)
           return {
            ...state,
            comments: [...state.comments, action.payload]
        }
    
        default:
             throw new Error('no comments')
    }
}


export type Action = 
    | { type: 'ADD', payload: CommentInterface }


export type CommentInterface = {
    id: number,
    name: string,
    text: string,
    count: number
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
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        count: 10
    },
    {
        id: 2,
        name: 'Mary',
        text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        count: 5
    }
    ]
}


