import { useUserComments } from "../../context/UserCommentsProvider";
import Comment from "../Comment/Comment";
import InputComment from "../InputComment";
import styles from './CommentContainer.module.css'

const CommentContainer = () => {

    const { state }  = useUserComments()
    return (
        <div className={styles["comment-container"]}>
            {state.comments.map(card => <Comment card={card} key={card.id} />)}
            <InputComment />
        </div>
    )
}


export default CommentContainer;


