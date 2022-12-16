import loadingClock from '../../assets/hourglass.png'
import './style.css'

const Loading = () => {
    return (
        <div className='imgContainer'> 
           <img  className='clockImg' src={loadingClock} alt='loading Clock' />
        </div>
    )
}


export default Loading;