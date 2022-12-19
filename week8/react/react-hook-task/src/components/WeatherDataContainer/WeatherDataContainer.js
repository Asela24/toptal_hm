import CardSection from "../CardSection/CardSection";

const WeatherDataContainer = ({weatherData, basicInformation}) => {
    
    return (
        <section className="container">
            <h1 className="container__title">How's the weather?</h1>
            <h2 className="container__city"> {basicInformation.city}, {basicInformation.neighborhood}</h2>
            <section className="container__weather"> 
             {weatherData.map((dayWeather, index) => <CardSection dayWeather={dayWeather} key={index}/>)}
            </section>
        </section>
    )
}

export default WeatherDataContainer;