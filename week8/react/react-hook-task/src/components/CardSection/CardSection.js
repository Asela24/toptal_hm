
const CardSection = ({dayWeather: {date, iconId, description, maxTemp, minTemp}}) => {
    return (
        <div className="weatherCard">
            <section className="weatherCard__date">
                {date}
            </section>
    
            <section className="weatherCard__picture">
                <img  src={`https://developer.accuweather.com/sites/default/files/${iconId}-s.png`} alt={'weather Picture'} />
            </section>
    
            <section className="weatherCard__condition">
                {description}
            </section>
    
            <section className="weatherCard__temperature">
            <span className="weatherCard__temperature_max">{maxTemp}</span>
            /
            <span className="weatherCard__temperature_min">{minTemp}</span>
            </section>
      </div>
    )
}

export default CardSection;