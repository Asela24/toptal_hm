import { getAllCountries, findByCountryName } from './requests.js';

getAllCountries();

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    if (e.target.value === '') {
        getAllCountries();
    } else {
        findByCountryName(e.target.value);
    }   
})





