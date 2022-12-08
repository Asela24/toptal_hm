import { deleteCards, createCards, createEmptyResult } from './utils.js';

const getAllCountries = async () => {
    const listOfCountriesData = await fetch('https://restcountries.com/v3.1/all');
    const listOfCountries = await listOfCountriesData.json();
    createCards(listOfCountries);
}

const findByCountryName = async (countryName) => {
    try {
        const listOfCountriesData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const listOfCountries = await listOfCountriesData.json();
        await deleteCards();
        createCards(listOfCountries);

    } catch(e) {
        createEmptyResult();
    }
}

export { findByCountryName, getAllCountries };