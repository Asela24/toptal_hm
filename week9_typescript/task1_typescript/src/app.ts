import pizzaMenuMethods from './changePizza';
import { breakfastPizza, greekPizza, pizzaMargarita, tacoPizza, whitePizza } from "./dbPizzas";
import { Pizza } from './types';

const menu = [] as Pizza[];

pizzaMenuMethods.addPizza(pizzaMargarita, menu)
pizzaMenuMethods.addPizza(greekPizza, menu) 
pizzaMenuMethods.addPizza(tacoPizza, menu)

console.log(pizzaMenuMethods.getMenu(menu));

console.log(pizzaMenuMethods.getHotPizzas(menu), 'hot pizzas')

pizzaMenuMethods.addPizza(breakfastPizza, menu)

console.log(pizzaMenuMethods.sortPizzas('price', 'desc', menu))
console.log(pizzaMenuMethods.getPizza('Gree1', menu))


