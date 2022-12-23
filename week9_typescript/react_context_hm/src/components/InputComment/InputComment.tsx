

import { useState } from 'react';
import { CommentInterface } from '../../context/reducer';
import { useUserComments } from '../../context/UserCommentsProvider';
const InputComment = () => {
    const [value, setValue] = useState<string>('')
    const { dispatch } = useUserComments();

    const handleInput = () => {
        dispatch({type: 'ADD', payload: createCommentObject(value)});
        setValue('')
    }

    return (
        <div>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} required></input>
            <button onClick={() => handleInput()}>Submit</button>
        </div>
    )
}

const createCommentObject = (text: string) => {

    const obj: CommentInterface  = {
        id:Math.floor(Date.now() / 1000),
        name: 'Max',
        text: text,
        count: 0
    }

    return obj;
}

export default InputComment;