type CreatePizza = {
    name: string,
    size: Sizes,
    crust: 'thin' | 'thick',
    topping: {
        name: string,
        isHot: boolean,
        quantity: string,
    }
    cookingTime: bakingDuration,
    price: number
}

enum bakingDuration {
    FAST = 10,
    MEDIUM = 20,
    SLOW = 30
}

enum Sizes {
    'S',
    'M',
     'L',
}

type Pizza =  {
    pizzaInformation: CreatePizza,
    id: string
    date: number
}

type ApiResult = {
    success: true,
    data: Pizza
}

type ApiError = {
    success: false,
    error: Error,
}

type ApiResponse = ApiError | ApiResult

const isApiError = (result: ApiResponse): result is ApiError => {
    return (result as ApiError).error !== undefined;
}


interface changePizza {
    addPizza: (pizza: CreatePizza, menu: Pizza[]) => Pizza
    getPizza: (id: string, menu: Pizza[]) => Pizza
    getHotPizzas: (menu: Pizza[]) => Pizza[] | Pizza
    sortPizzas: (criterion:  CriteriaCreatePizza | CriteriaPizza, direction: DirectionType, menu: Pizza[]) => void
    getMenu: (menu: Pizza[]) => Pizza[]   
} 

type CriteriaCreatePizza = keyof CreatePizza & TypesForSearch
type CriteriaPizza = keyof Pizza & 'date'
type TypeForSearchInput = string | number

type DirectionType = 'asc' | 'desc'
type TypesForSearch = 'name' | 'size' | 'price' | 'cookingTime' 


export { Sizes, CreatePizza, Pizza, ApiError, ApiResponse, ApiResult, bakingDuration, changePizza, CriteriaCreatePizza, CriteriaPizza, TypeForSearchInput, DirectionType, TypesForSearch }