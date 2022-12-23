import { useUserComments } from '../../context/UserCommentsProvider';
import { useState } from 'react';

const ChangeComment = ({id} : {id: number}) => {
    const [isEdit, setEdit] = useState(false)

    const { dispatch } = useUserComments()

    const handleEdit = () => {
        dispatch({type: 'EDIT', payload: id})
        setEdit(!isEdit)
    }

    return (
        <div className='change-comment'>
            <div onClick={(() => dispatch({type: 'DELETE', payload: id}))}>DELETE</div>
            <div onClick={(() => handleEdit())}>
                {isEdit ? 'SAVE' : 'EDIT'}
            </div>
        </div>
    )
}

export default ChangeComment;