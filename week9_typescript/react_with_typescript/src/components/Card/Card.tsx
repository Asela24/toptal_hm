import React from "react";

interface AnimeCard {
    item: { 
        name: string,
        img: string,
        year: number, 
    }
      
}
const Card = ({item}: AnimeCard) => {

    return (        
        <div>
            <img src={item.img} alt='anime poster' />
            <h2>{item.name}</h2>
            <div>{item.year}</div>
        </div>
    )
}

export default Card;

