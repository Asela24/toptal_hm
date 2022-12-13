import './ListComponent.style.css'
import TileComponent from '../TileComponent/TitleComponent'

const ListComponent = ({colorsArray}) => {
    return (
        <div className='list_container'>
            {colorsArray.map(color => {
                return <TileComponent color={color} key={color}/> 
            })}
        </div>
    )
}

export default ListComponent;