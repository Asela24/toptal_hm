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
type myType = 'name' | 'size' | 'price' | 'cookingTime' 


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

    sortPizzas: (criteria, di, menu) => {
       if (criteria === 'date') { // when i use array<keyof Pizza> it doesn't match it why?
            const a = menu.sort((a, b) => b.date - a.date );
       } else {
            const sortedMenu = menu.sort((a, b) => {
                if (a.pizzaInformation[criteria] < b.pizzaInformation[criteria]) {
                    console.log(a.pizzaInformation[criteria])
                    console.log(a.pizzaInformation[criteria] < b.pizzaInformation[criteria])
                    return -1
                } else return 1
            })
            console.log(sortedMenu)
        }
            }, 


    getMenu: (menu) => menu

}

changePizzaMenu.addPizza(pizzaMargarita, menu)




changePizzaMenu.addPizza(greekPizza, menu) 
/* console.log(changePizzaMenu.getMenu(menu))
 */
setTimeout(()=> {changePizzaMenu.addPizza(tacoPizza, menu)}, 100)
changePizzaMenu.sortPizzas("size", 'asc', menu)

const sortFunction = (dir: directionType , a: Pizza, b:Pizza, criteria: CriteriaCreatePizza ): number =>  {
    if (dir === 'asc') {
        return a.pizzaInformation[criteria] < b.pizzaInformation[criteria] ? -1 : 1;
    } else  return 0
}

