import { useUserComments } from '../../context/UserCommentsProvider';
import styles from './Count.module.css'

const Count = ({id} : {id: number}) => {
    
    const { state, dispatch }  = useUserComments()
    
    const comment = state.comments.filter(comment => comment.id === id)[0]

    return (
             <div className={styles.count}>
                <button onClick={() => dispatch({type: 'INCREMENT', payload: id})}>+</button>
                <div>{comment.count}</div>
                <button onClick={() => dispatch({type: 'DECREMENT', payload: id})}>-</button>
            </div>
    )
}

export default Count

