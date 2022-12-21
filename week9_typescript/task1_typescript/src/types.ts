type CreatePizza = {
    name: string,
    size: 'S' | 'M' | 'L',
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

export { CreatePizza, Pizza, ApiError, ApiResponse, ApiResult, bakingDuration }