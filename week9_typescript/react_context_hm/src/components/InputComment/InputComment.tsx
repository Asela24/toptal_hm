import { useState } from 'react';
import { useUserComments } from '../../context/UserCommentsProvider';
import { createCommentObject } from '../../utils';
import './style.css'
const InputComment = () => {
    const [value, setValue] = useState<string>('')
    const { dispatch } = useUserComments();

    const handleInput = () => {
        dispatch({type: 'ADD', payload: createCommentObject(value)});
        setValue('')
    }

    return (
        <div className='input-container'>
            <textarea  value={value} onChange={(e) => setValue(e.target.value)} required />
            <button onClick={() => handleInput()}>Submit</button>
        </div>
    )
}

export default InputComment;