import { CommentInterface } from '../../context/reducer';
import Count from '../Count';

import './style.css'
const Comment = ({card} : {card: CommentInterface}) => {

    return (
        <div className='comment' onClick={(e) => console.log(e.target)}>
            <Count id={card.id} />
            <p className='comment-text'>
               {card.text}
            </p>
        </div>
    )
}

export default Comment

