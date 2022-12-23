import './style.css'
import { useUserComments } from '../../context/UserCommentsProvider';
const Count = ({id} : {id: number}) => {
    
    const { state, dispatch }  = useUserComments()
    
    const comment = state.comments.filter(comment => comment.id === id)[0]

    return (
             <div className='count'>
                <button onClick={() => dispatch({type: 'INCREMENT', payload: id})}>+</button>
                <div>{ comment.count }</div>
                <button onClick={() => dispatch({type: 'DECREMENT', payload: id})}>-</button>
            </div>
    )
}

export default Count

