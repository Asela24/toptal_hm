import flagCard from "./flagCardCreator.js";

const getAllCountries = async () => {
    const listOfCountriesData = await fetch('https://restcountries.com/v3.1/all');
    const listOfCountries = await listOfCountriesData.json();
    listOfCountries.forEach(country =>{
        const flag = new flagCard(country);
        flag.createCard();
    });
}




getAllCountries()