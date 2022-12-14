class CountryCard {
    constructor(country) {
        this.capital = country.capital ? country.capital : 'No capital'
        this.name = country.name.official 
        this.language = country.languages ? Object.values(country.languages).join('/') : 'No language'
        this.flag = country.flags.png 
        this.cardTemplate = document.querySelector('template');
        this.clone = this.cardTemplate.content.cloneNode(true);
    }

    createCard() {  
        const mainContainer = document.querySelector('.cards__container');

        this.createElement('name', 'textContent');
        this.createElement('flag', 'src');
        this.createElement('capital', 'textContent');
        this.createElement('language', 'textContent');

        mainContainer.append(this.clone);

    }

    createElement(type, property) {
        const element = this.clone.querySelector(`.country__${type}`);
        element[property] = this[type]
    }
}

export default CountryCard; 
