import { CreatePizza, bakingDuration, Sizes } from "./types";

const pizzaMargarita: CreatePizza = {
    name: 'Margarita',
    size: Sizes.S,
    crust: 'thin',
    topping: {
        name: 'Cheese',
        isHot: false,
        quantity: '560gr'
    },
    cookingTime: bakingDuration.SLOW,
    price: 500
}

const pizza4Cheeses: CreatePizza = {
    name: 'Four Cheeses',
    size: Sizes.M,
    crust: 'thick',
    topping: {
        name: 'Artichokes',
        isHot: true,
        quantity: '860gr'
    },
    cookingTime: bakingDuration.SLOW,
    price: 700
}


const tacoPizza: CreatePizza = {
    name: 'Taco Pizza',
    size: Sizes.L,
    crust: 'thick',
    topping: {
        name: 'Taco',
        isHot: true,
        quantity: '900gr'
    },
    cookingTime: bakingDuration.FAST,
    price: 800
}


const whitePizza = {
    name: 'White Pizza',
    size: Sizes.L,
    crust: 'thin',
    topping: {
        name: 'White-sauce',
        isHot: false,
        quantity: '400gr'
    },
    cookingTime: bakingDuration.FAST,
    price: 450
}


const greekPizza: CreatePizza = {
    name: 'Greek Pizza',
    size: Sizes.M,
    crust: 'thin',
    topping: {
        name: 'black olives',
        isHot: true,
        quantity: '500gr'
    },
    cookingTime: bakingDuration.MEDIUM,
    price: 450
}


const breakfastPizza: CreatePizza = {
    name: 'Breakfast Pizza',
    size: Sizes.M,
    crust: 'thick',
    topping: {
        name: 'eggs',
        isHot: false,
        quantity: '500gr'
    },
    cookingTime: bakingDuration.SLOW,
    price: 450
}

export { pizzaMargarita, greekPizza, whitePizza, tacoPizza, pizza4Cheeses, breakfastPizza }