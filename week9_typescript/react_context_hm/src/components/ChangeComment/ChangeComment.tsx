import { useUserComments } from '../../context/UserCommentsProvider';
import { useState } from 'react';
import styles from './ChangeComment.module.css'

const ChangeComment = ({id} : {id: number}) => {
    const [isEdit, setEdit] = useState(false)

    const { dispatch } = useUserComments()

    const handleEdit = () => {
        dispatch({type: 'EDIT', payload: id})
        setEdit(!isEdit)
    }

    return (
        <div className={styles.comment}>
            <div> 
                <img src='/icon-delete.svg' alt='delete icon' />
                <span onClick={(() => dispatch({type: 'DELETE', payload: id}))}>Delete</span>
            </div>
           
            <div onClick={(() => handleEdit())}>
                <img src='/icon-edit.svg' alt='edit icon' />
                <span> {isEdit ? 'Update' : 'Edit'} </span> 
            </div>
        </div>
    )
}

export default ChangeComment;