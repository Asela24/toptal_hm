import CountryCard from "./flagCardCreator.js";

const deleteCards = async () => {
    const cardsContainer = document.querySelector('.cards__container');
    cardsContainer.innerHTML = '';
}

const createCards = (listOfCards) => {
    listOfCards.forEach(country => {
        const card = new CountryCard(country);
        card.createCard();
    });
}

const createEmptyResult = () => {
    const errorElement = document.createElement('div');
    const mainContainer = document.querySelector('.cards__container');
    errorElement.textContent = 'No country with this name';
    mainContainer.append(errorElement);
}

export { deleteCards, createCards, createEmptyResult };