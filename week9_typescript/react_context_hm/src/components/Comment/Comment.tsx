import { CommentInterface } from '../../reducer';
import Count from '../Count';
import ChangeComment from '../ChangeComment';
import { useState } from 'react';
import { useUserComments } from '../../context/UserCommentsProvider';
import { useCurrentUser } from '../../context/CurrentUserProvider';
import './style.css'

const Comment = ({card} : {card: CommentInterface}) => {

    const [input, setInput] = useState(card.text) 
    const { dispatch } = useUserComments()
    const nameOfUser = useCurrentUser();

    const isAuthorOfComment = nameOfUser === card.name;


    const handleInputChange = (value: any) => {
           setInput(value);
           dispatch({type: 'CHANGE_TEXT', payload: { id: card.id, text: value}}) 
    } 

    return (
        <div className='comment'>

            <Count id={card.id} />
            <div className="comment-author">{card.name}</div>
            <textarea className='comment-text' value={input} onChange={e => handleInputChange(e.target.value)} disabled={card.inputDisabled} />

            {isAuthorOfComment ? <ChangeComment id={card.id}/> : null}
        </div>
    )
}

export default Comment

