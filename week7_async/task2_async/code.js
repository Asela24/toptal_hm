import { getAllCountries, findByCountryName } from './requests.js';

getAllCountries();

const input = document.querySelector('input');


input.addEventListener('keydown', async (e) => {
    const cardsContainer = document.querySelector('.cards__container');
    cardsContainer.innerHTML = '';

    if (e.target.value === '') {
        getAllCountries();
    } else {
        findByCountryName(e.target.value);
    }   
})





