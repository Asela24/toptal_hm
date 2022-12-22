import { changePizza } from "./types";
import { sortFunction } from "./utils";

const pizzaMenuMethods: changePizza = {
    addPizza: (pizza, menu) => {
        const id: string = pizza.name.slice(0, 4) + pizza.size

        const newDate = Math.floor(new Date().getTime())

        const newPizza = {
            pizzaInformation: pizza,
            id: id,
            date: newDate
        }

        menu.push(newPizza)

        return newPizza
    },

    getPizza: (id, menu) => menu.filter(pizza => pizza.id === id)[0],
    
    getHotPizzas: (menu) => menu.filter(pizza => pizza.pizzaInformation.topping.isHot),

    sortPizzas: (criteria, direction, menu) => {

       if (criteria === 'date') { // when i use array<keyof Pizza> it doesn't match it why?
            const sortedMenu = menu.sort((a, b) => sortFunction(direction, a.date, b.date));
            return sortedMenu

       } else {

            const sortedMenu = menu.sort((a, b) => sortFunction(direction, a.pizzaInformation[criteria], b.pizzaInformation[criteria]))
            return sortedMenu
        }
    }, 

    getMenu: (menu) => menu,

}

export default pizzaMenuMethods



