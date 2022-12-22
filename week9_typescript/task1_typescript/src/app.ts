import { CreatePizza, Pizza, ApiError, ApiResponse, ApiResult, bakingDuration } from "./types";
import { greekPizza, pizzaMargarita, tacoPizza } from "./dbPizzas";

const menu = [] as Pizza[];

interface changePizza {
    addPizza: (pizza: CreatePizza, menu: Pizza[]) => Pizza
    getPizza: (id: string, menu: Pizza[]) => Pizza
    getHotPizzas: (menu: Pizza[]) => Pizza[] | Pizza
    sortPizzas: (criterion:  CriteriaCreatePizza | CriteriaPizza, direction: directionType, menu: Pizza[]) => void
    getMenu: (menu: Pizza[]) => Pizza[]   
} 

// asc - с меньшего в большее

type CriteriaCreatePizza = keyof CreatePizza & myType
type CriteriaPizza = keyof Pizza & 'date'

type directionType = 'asc' | 'desc'
type myType = 'name' | 'size' | 'price'


const changePizzaMenu: changePizza = {
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

    sortPizzas: (criteria, di) => {

        if (criteria in Array<keyof Pizza>) {
            console.log('first')
            } 

        if (criteria in Array<keyof CreatePizza>) {
            console.log('second')
        }

        },


    getMenu: (menu) => menu

}

changePizzaMenu.addPizza(pizzaMargarita, menu)


/* console.log(changePizzaMenu.getPizza('MargS', menu))

console.log(changePizzaMenu.getHotPizzas(menu)) */

/* changePizzaMenu.sortPizzas() */
changePizzaMenu.addPizza(tacoPizza, menu)
changePizzaMenu.addPizza(greekPizza, menu) 
console.log(changePizzaMenu.getMenu(menu));
changePizzaMenu.sortPizzas('date', 'asc', menu)