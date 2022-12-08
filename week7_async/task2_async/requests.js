import CountryCard from "./flagCardCreator.js";

let list;

const getAllCountries = async () => {
    const listOfCountriesData = await fetch('https://restcountries.com/v3.1/all');
    const listOfCountries = await listOfCountriesData.json();
    list = listOfCountries;
    listOfCountries.forEach(country => {
        const card = new CountryCard(country);
        card.createCard();
    });
}

const findByCountryName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector('.cards__container');
        cardsContainer.innerHTML = '';
        return data;
    })    
    .then((dataList) => dataList.forEach(country => {
        const card = new CountryCard(country);
        card.createCard();
    }))
    .catch(err => {
        console.log(err)
        const errorElement = document.createElement('div');
        const mainContainer = document.querySelector('.cards__container');
        errorElement.textContent = 'No country with this name';
        mainContainer.append(errorElement);
    })
}

export { findByCountryName, getAllCountries };