import { CommentInterface } from '../../reducer';
import Count from '../Count';
import ChangeComment from '../ChangeComment';
import { useState } from 'react';
import { useUserComments } from '../../context/UserCommentsProvider';
import { useCurrentUser } from '../../context/CurrentUserProvider';

import styles from './Comment.module.css'

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
        <div className={styles.comment}>
            <Count id={card.id} />
            <div className={styles.author}> 
                <img src={card.avatar} alt='avatar'/>
                <div>{card.name}</div>
                {isAuthorOfComment ? <div className={styles.youTag}>you</div> : null}
                {isAuthorOfComment ? <ChangeComment id={card.id}/> : null}
            </div>
            <textarea className={styles.text} value={input} onChange={e => handleInputChange(e.target.value)} disabled={card.inputDisabled} />
        </div>
    )
}

export default Comment

