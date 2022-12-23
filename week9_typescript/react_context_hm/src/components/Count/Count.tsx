import './style.css'
import { useUserComments } from '../../context/UserCommentsProvider';
const Count = ({id} : {id: number}) => {
    
    const { state }  = useUserComments()

    return (
             <div className='count' onClick={(e => console.log(id))}>
                <button>+</button>
                <div>0</div>
                <button>-</button>
            </div>
    )
}

export default Count

